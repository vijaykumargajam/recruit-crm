  const editBtn = document.getElementById("edit");
  const userDetails = document.getElementById("userDetails");

  let editing = false;

  editBtn.addEventListener("click", () => {
      const fields = userDetails.querySelectorAll("p[data-key]");

      if (!editing) {

          fields.forEach(field => {
              const value = field.textContent;
              const key = field.dataset.key;
              field.innerHTML = `<input type="text" value="${value}" data-key="${key}"/>`;
          });
          editBtn.innerHTML = `<i class="bx  bxs-save"></i>`;
      } else {

          fields.forEach(field => {
              const input = field.querySelector("input");
              if (input) {
                  field.textContent = input.value;
              }
          });
          editBtn.innerHTML = `<i class="bx  bxs-pencil"></i>`;
      }

      editing = !editing;
  });
  document.addEventListener("DOMContentLoaded", function() {
      const toggleMenu = document.querySelector(".toggle-menu");
      toggleMenu.addEventListener("click", function() {
          const menu = document.querySelector(".menu");
          const menuIcon = this.querySelector("img");

          menu.classList.toggle("active");

          if (menu.classList.contains("active")) {
              menuIcon.src = "./images/icons8-close.svg";
              menuIcon.alt = "close";
          } else {
              menuIcon.src = "./images/icons8-menu.svg";
              menuIcon.alt = "menu";
          }
      });
  });

  document.querySelectorAll('.tab-select').forEach(select => {
      const tabId = select.getAttribute('data-tab-target');
      const tabList = document.getElementById(tabId);

      select.addEventListener('change', function() {
          const target = this.value;
          const tabTrigger = new bootstrap.Tab(tabList.querySelector('[data-bs-target="' + target + '"]'));
          tabTrigger.show();
      });

      tabList.querySelectorAll('button').forEach(tab => {
          tab.addEventListener('shown.bs.tab', function(event) {
              select.value = event.target.getAttribute('data-bs-target');
          });
      });
  });