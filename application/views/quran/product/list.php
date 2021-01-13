<!DOCTYPE html>
<html lang="en">

<head>
	<?php $this->load->view("admin/_partials/head.php") ?>
</head>

<body id="page-top">

	<?php $this->load->view("admin/_partials/navbar.php") ?>
	<div id="wrapper">

		<?php $this->load->view("admin/_partials/sidebar.php") ?>

		<div id="content-wrapper">

			<div class="container-fluid">

				<?php $this->load->view("admin/_partials/breadcrumb.php") ?>

				<!-- DataTables -->
				<div class="card mb-3">
					<div class="card-header">
						<a href="<?php echo site_url('admin/products/add') ?>"><i class="fas fa-plus"></i> Add New</a>
					</div>
					<br>
					<div class="form-group">
						<div class="col-md-4">
							<div class="pull-right">
						    	<form method="post" action="<?php echo site_url('admin/products/action') ?>">
						    	<button class="btn btn-success btn-md" id="download-excel"><i class="fa fa-download"></i> Export Excel </button>
						    	</form>
							</div>
						</div>
					</div>
					<br>
					<div class="card-body">

						<div class="table-responsive">
							<table class="table table-hover" id="dataTable" width="100%" cellspacing="0">
								<thead>
									<tr>
										<th>Nama Lengkap</th>
										<th>Email</th>
										<th>No Handphone</th>
										<th>Instagram</th>
										<th>Alamat</th>
										<th>Aksi</th>
									</tr>
								</thead>
								<tbody>
									<?php foreach ($products as $product): ?>
									<tr>
										<td width="200">
											<?php echo $product->username ?>
										</td>
										<td>
											<?php echo $product->email ?>
										</td>
										<td>
											<?php echo $product->no_hp ?>
										</td>
										<td>
											<?php echo $product->instagram ?>
										</td>
										<td>
											<?php echo $product->alamat ?>
										</td>
										<td width="50">
											<!-- <a href="<?php echo site_url('admin/products/edit/'.$product->id) ?>"
											 class="btn btn-small"><i class="fas fa-edit"></i> Edit</a>
											<a onclick="deleteConfirm('<?php echo site_url('admin/products/delete/'.$product->id) ?>')"
											 href="#!" class="btn btn-small text-danger"><i class="fas fa-trash"></i> Hapus</a> -->
											 <a href="<?php echo site_url('admin/products/view/'.$product->id) ?>"
											 class="btn btn-small"><i class="fa fa-eye"></i>View</a>
										</td>
									</tr>
									<?php endforeach; ?>

								</tbody>
							</table>
						</div>
					</div>
				</div>

			</div>
			<!-- /.container-fluid -->

			<!-- Sticky Footer -->
			<?php $this->load->view("admin/_partials/footer.php") ?>

		</div>
		<!-- /.content-wrapper -->

	</div>
	<!-- /#wrapper -->


	<?php $this->load->view("admin/_partials/scrolltop.php") ?>
	<?php $this->load->view("admin/_partials/modal.php") ?>

	<?php $this->load->view("admin/_partials/js.php") ?>

	<script>
	function deleteConfirm(url){
		$('#btn-delete').attr('href', url);
		$('#deleteModal').modal();
	}
	</script>
</body>

</html>
