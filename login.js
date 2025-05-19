function handleCredentialResponse(response) {
  console.log("Token ID Google (JWT):", response.credential);

  // Kirim token ini ke backend kamu jika perlu
  // fetch("/api/login", {
  //   method: "POST",
  //   headers: { "Content-Type": "application/json" },
  //   body: JSON.stringify({ token: response.credential }),
  // }).then(res => res.json()).then(data => {
  //   console.log("Login berhasil", data);
  // });
}
