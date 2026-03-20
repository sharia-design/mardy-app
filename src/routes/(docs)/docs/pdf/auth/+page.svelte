<script>
	import { PDFViewer } from '@embedpdf/svelte-pdf-viewer';
</script>

<div style="height: 100vh;">
	<PDFViewer
		config={{
			src: '/pdf/instruction/auth/authorization_docs_GE.pdf',
			theme: { preference: 'dark' },
			disabledCategories: ['annotation', 'redaction', 'shapes', 'panel-comment']
		}}
		style="width: 100%; height: 100%;"
	/>
</div>
