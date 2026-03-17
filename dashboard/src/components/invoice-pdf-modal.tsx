"use client";

import { useEffect, useState, useCallback } from "react";
import { X, Send, Loader2, CheckCircle, AlertCircle } from "lucide-react";
import { generateInvoicePdf, type InvoiceData } from "@/lib/pdf/generate-invoice";

interface InvoicePdfModalProps {
  invoiceData: InvoiceData;
  onClose: () => void;
}

type SendStatus = "idle" | "sending" | "sent" | "error";

export function InvoicePdfModal({ invoiceData, onClose }: InvoicePdfModalProps) {
  const [pdfUrl, setPdfUrl] = useState<string | null>(null);
  const [sendStatus, setSendStatus] = useState<SendStatus>("idle");
  const [sendMessage, setSendMessage] = useState("");

  useEffect(() => {
    // Load logo and generate PDF
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.onload = () => {
      const canvas = document.createElement("canvas");
      canvas.width = img.naturalWidth;
      canvas.height = img.naturalHeight;
      const ctx = canvas.getContext("2d")!;
      ctx.drawImage(img, 0, 0);
      const dataUrl = canvas.toDataURL("image/png");

      const doc = generateInvoicePdf(invoiceData, dataUrl);
      const blob = doc.output("blob");
      const url = URL.createObjectURL(blob);
      setPdfUrl(url);
    };
    img.onerror = () => {
      // Generate without logo
      const doc = generateInvoicePdf(invoiceData);
      const blob = doc.output("blob");
      const url = URL.createObjectURL(blob);
      setPdfUrl(url);
    };
    img.src = "/jpf-logo.svg";

    return () => {
      if (pdfUrl) URL.revokeObjectURL(pdfUrl);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [invoiceData]);

  const handleSend = useCallback(async () => {
    setSendStatus("sending");
    setSendMessage("");

    try {
      const res = await fetch("/api/invoices/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ paymentId: invoiceData.paymentId }),
      });

      const data = await res.json();

      if (!res.ok) {
        setSendStatus("error");
        setSendMessage(data.error || "Failed to send invoice");
        return;
      }

      setSendStatus("sent");
      setSendMessage(`Sent to ${data.sentTo}`);
    } catch {
      setSendStatus("error");
      setSendMessage("Network error — please try again");
    }
  }, [invoiceData.paymentId]);

  // Close on escape key
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative z-10 w-full max-w-3xl mx-4 bg-card rounded-xl shadow-2xl border border-border overflow-hidden flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-3.5 border-b border-border bg-muted/40">
          <div>
            <h2 className="font-semibold text-base">Pledge Statement</h2>
            <p className="text-sm text-muted-foreground">{invoiceData.contactName}</p>
          </div>
          <div className="flex items-center gap-2">
            {/* Send button */}
            <button
              onClick={handleSend}
              disabled={sendStatus === "sending" || sendStatus === "sent"}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium text-white bg-primary hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              {sendStatus === "idle" && (
                <>
                  <Send className="h-4 w-4" />
                  Send Invoice
                </>
              )}
              {sendStatus === "sending" && (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Sending...
                </>
              )}
              {sendStatus === "sent" && (
                <>
                  <CheckCircle className="h-4 w-4" />
                  Sent
                </>
              )}
              {sendStatus === "error" && (
                <>
                  <AlertCircle className="h-4 w-4" />
                  Retry
                </>
              )}
            </button>

            {/* Close button */}
            <button
              onClick={onClose}
              className="p-2 rounded-lg hover:bg-muted transition-colors text-muted-foreground"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Status message */}
        {sendMessage && (
          <div
            className={`px-5 py-2 text-sm ${
              sendStatus === "sent"
                ? "bg-green-50 text-green-700 border-b border-green-200"
                : "bg-red-50 text-red-700 border-b border-red-200"
            }`}
          >
            {sendMessage}
          </div>
        )}

        {/* PDF preview */}
        <div className="flex-1 min-h-0 p-4">
          {pdfUrl ? (
            <iframe
              src={pdfUrl}
              className="w-full h-full min-h-[600px] rounded-lg border border-border"
              title="Invoice PDF Preview"
            />
          ) : (
            <div className="flex items-center justify-center h-96">
              <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
