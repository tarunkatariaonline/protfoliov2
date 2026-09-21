"use client";

import * as React from "react";
import { CheckIcon, CopyIcon } from "lucide-react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { profile } from "@/lib/data";

export function CopyEmail() {
  const [copied, setCopied] = React.useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      toast.success("Email copied to clipboard");
      setTimeout(() => setCopied(false), 2000);
    } catch {
      toast.error("Couldn't copy — you can select it manually.");
    }
  }

  return (
    <Button variant="outline" size="sm" onClick={copy} className="shrink-0">
      {copied ? <CheckIcon className="text-brand" /> : <CopyIcon />}
      {copied ? "COPIED" : "COPY"}
    </Button>
  );
}
