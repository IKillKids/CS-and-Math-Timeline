import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog';
import { Tabs, TabsList, TabsTrigger, TabsContent } from './ui/tabs';
import { Info, AlertCircle } from 'lucide-react';

interface PdfDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

export function PdfDialog({ isOpen, onClose }: PdfDialogProps) {
  const pdfCsUrl = import.meta.env.VITE_PDF_CS_URL || '/roadmap.pdf';
  const pdfMathUrl = import.meta.env.VITE_PDF_MATH_URL || '/math-roadmap.pdf';

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-[95vw] md:max-w-6xl h-[90vh] flex flex-col p-6 border-white/10 bg-slate-900/98 backdrop-blur-xl">
        <DialogHeader className="flex flex-col space-y-1.5 shrink-0 text-left">
          <DialogTitle className="text-xl font-bold text-white flex items-center gap-2">
            <span>📄</span> Roadmap Documents
          </DialogTitle>
          <p className="text-xs text-white/50">
            View the original curriculum PDFs for reference.
          </p>
        </DialogHeader>

        <div className="flex-1 min-h-0 mt-4 flex flex-col">
          <Tabs defaultValue="cs" className="flex-1 flex flex-col min-h-0">
            <TabsList className="w-fit self-center md:self-start shrink-0 mb-4 bg-white/5 border border-white/10 p-1 rounded-lg">
              <TabsTrigger
                value="cs"
                className="data-[state=active]:bg-cyan-500 data-[state=active]:text-white font-medium text-xs px-4 py-1.5 rounded-md"
              >
                CS & AI Roadmap
              </TabsTrigger>
              <TabsTrigger
                value="math"
                className="data-[state=active]:bg-violet-500 data-[state=active]:text-white font-medium text-xs px-4 py-1.5 rounded-md"
              >
                Mathematics Roadmap
              </TabsTrigger>
            </TabsList>

            <TabsContent value="cs" className="flex-1 min-h-0 mt-0">
              {pdfCsUrl ? (
                <iframe
                  src={pdfCsUrl}
                  className="w-full h-full border border-white/10 rounded-lg bg-slate-950/50"
                  title="CS & AI Engineering Roadmap PDF"
                />
              ) : (
                <PdfFallback name="CS & AI Engineering Roadmap" varName="VITE_PDF_CS_URL" />
              )}
            </TabsContent>

            <TabsContent value="math" className="flex-1 min-h-0 mt-0">
              {pdfMathUrl ? (
                <iframe
                  src={pdfMathUrl}
                  className="w-full h-full border border-white/10 rounded-lg bg-slate-950/50"
                  title="Mathematics Roadmap PDF"
                />
              ) : (
                <PdfFallback name="Mathematics Roadmap" varName="VITE_PDF_MATH_URL" />
              )}
            </TabsContent>
          </Tabs>
        </div>
      </DialogContent>
    </Dialog>
  );
}

function PdfFallback({ name, varName }: { name: string; varName: string }) {
  return (
    <div className="w-full h-full border border-dashed border-white/10 rounded-lg bg-white/2 flex flex-col items-center justify-center p-8 text-center max-w-2xl mx-auto my-auto min-h-[300px]">
      <div className="size-12 rounded-full bg-amber-500/10 border border-amber-500/20 flex items-center justify-center mb-4">
        <AlertCircle className="size-6 text-amber-400" />
      </div>
      <h3 className="text-base font-semibold text-white/90 mb-2">
        PDF Not Configured
      </h3>
      <p className="text-sm text-white/60 leading-relaxed mb-6">
        The PDF viewer for <strong className="text-white/80">{name}</strong> is not configured because the <code className="text-xs px-1.5 py-0.5 rounded bg-white/10 text-cyan-300 font-mono">{varName}</code> environment variable is missing.
      </p>
      <div className="flex items-start gap-2.5 text-left p-3 rounded bg-white/5 border border-white/10 max-w-md">
        <Info className="size-4 text-cyan-400 shrink-0 mt-0.5" />
        <p className="text-xs text-white/50 leading-relaxed">
          To set this up, upload your PDF file to your Supabase Storage bucket (e.g. a public <code className="text-cyan-400">pdfs</code> bucket) and add the public URL as <code className="text-cyan-400 font-mono">{varName}</code> in your <code className="font-mono bg-white/5 px-1 py-0.5 rounded">.env</code> file.
        </p>
      </div>
    </div>
  );
}
