    function validateForm() {
      const cnic = document.getElementById("cnic").value;
      const phone = document.getElementById("phone").value
      const cnicPattern = /^[0-9]{5}-[0-9]{7}-[0-9]$/;
      if (!cnicPattern.test(cnic)) {
        alert("Please enter a valid CNIC number (e.g. 42101-1234567-1)");
        return false;
      }
      if (phone.length < 10 || isNaN(phone)) {
        alert("Please enter a valid phone number.");
        return false;
      }
      alert("Form submitted successfully!");
      return true;
    }
