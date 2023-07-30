import Swal from 'sweetalert2';

export const successToast = (props) => {
	const Toast = Swal.mixin({
		toast: true,
		position: 'top-end',
		showConfirmButton: false,
		timer: 3500,
		timerProgressBar: true,
		didOpen: (toast) => {
			toast.addEventListener('mouseenter', Swal.stopTimer);
			toast.addEventListener('mouseleave', Swal.resumeTimer);
		}
	});
	Toast.fire(props);
}

export const buttonSwal = (props) => {
	const swalWithBootstrapButtons = Swal.mixin({
		customClass: {
			confirmButton: 'btn btn-success',
			cancelButton: 'btn btn-danger'
		},
		buttonsStyling: false
	});

	swalWithBootstrapButtons
		.fire({
			title: props.title,
			text: props.text,
			icon: 'warning',
			showCancelButton: true,
			confirmButtonText: props.confirmButtonText,
			cancelButtonText: props.cancelButtonText,
			reverseButtons: true
		})
		.then((result) => {
			if (result.isConfirmed) {
				props.handlerAcce(props.data);
			} else if (result.dismiss === Swal.DismissReason.cancel) {
				props.handlerCanc(props.data);
			}
		});
}

export const swl = (props) => {
	return Swal.fire(props);
}

export const swlToast = (config) => {
	this.swl(
		Object.assign(config, {
			toast: true,
			position: 'top-end',
			showConfirmButton: false,
			timer: 3000
		})
	);
}

export const swalError = (params, titleS) => {
	let titleSwl = 'Oops...';
	if (params.title) {
		titleSwl = titleS;
	}

	Swal.fire({
		icon: 'error',
		title: titleSwl,
		text: params
	});
}

export const swalGeneric = (params) => {
	Swal.fire({
		icon: params.icon,
		title: params.title,
		text: params.text
	});
}

export const swalNeddLogin = (params) => {
	Swal.fire({
		icon: 'error',
		title: params,
		text: 'Se requiere haber iniciado sesión para entrar a esta sección'
	});
}

export const swalSuccess = (msg) => {
	Swal.fire({
		icon: 'success',
		toast: true,
		title: msg,
		position: 'top-end',
		showConfirmButton: false,
		timer: 3500
	});
}

