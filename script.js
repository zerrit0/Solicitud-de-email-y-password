function verificar() {
  const email = document.querySelector('#email').value
  const password = document.querySelector('#password').value
  const resultado = document.querySelector('#resultado')

  if (email === 'bryan.adasme.acuna@gmail.com' && password === '2009') {
    resultado.innerHTML = 'Usuario correcto'
  } else {
    resultado.innerHTML = 'Usuario incorrecto'
  }
}

function aceptarTerminos() {
  const aceptar = document.querySelector('#aceptar')
  aceptar.innerHTML = 'Términos aceptados ✓'
  aceptar.disabled = true

  document.querySelector('#continuar').disabled = false
  document.querySelector('#mensaje').innerHTML = ''
}

function continuar() {
  document.querySelector('#mensaje').innerHTML = 'Continuando...'
}