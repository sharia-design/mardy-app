<script>
	import { PDFViewer } from '@embedpdf/svelte-pdf-viewer';
</script>

<div style="height: 100vh;">
	<PDFViewer
		config={{
			src: '/pdf/instruction/admin/admin_dashboard_docs_KA.pdf',
			theme: { preference: 'dark' },
			disabledCategories: ['annotation', 'redaction', 'shapes', 'panel-comment']
		}}
		style="width: 100%; height: 100%;"
	/>
</div>
