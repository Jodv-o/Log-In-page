const $ = tag => document.querySelectorAll(tag);
const _ = tag => document.querySelector(tag);

const $darkModeTogle = _("#switchCheck");
const $formBtns = $(".btn");
const $labels = $(".form-label");
const $inputs = $(".form-control");
const rl = _(".reg-link");
const ll = _(".log-link")

rl.addEventListener("click", ()=>{
  document.title = "Two Dices | Sign Up"
  _(".login-cont").style.transform = "translateX(200%)"
  setTimeout(()=>{
    _(".login-cont").style.display = "none"
  }, 600)
  setTimeout(()=>{
    _(".register-cont").style.transform = "translateX(0)"
  }, 700)
  _(".register-cont").style.display = "block"
})

ll.addEventListener("click", ()=>{
  document.title = "Two Dices | Log In"
  _(".register-cont").style.transform = "translateX(-200%)"
  setTimeout(()=>{
    _(".register-cont").style.display = "none"
  }, 600)

  setTimeout(()=>{
    _(".login-cont").style.display = "block"
  }, 600)
  setTimeout(()=>{
    _(".login-cont").style.transform = "translateX(0)"
  }, 650)
})

$darkModeTogle.addEventListener("input", ()=>{
  if($darkModeTogle.checked){
    document.body.className = "bg-dark";
    $labels.forEach((l)=>{
      l.className = "form-label text-white";
    })
    $inputs.forEach((i)=>{
      i.className = "form-control bg-dark text-white";
    })
    _("#switchCheck").className = "form-check-input bg-dark";
    $(".fa-dice").forEach((f)=>{
      f.className = `fa-solid fa-dice scaled-md text-white`;
    });
    $("a").forEach((a)=>{a.className = "link-light"}), $("p").forEach((p)=>{p.className = "lead-xs text-white my-2"});
    $formBtns.forEach((fb)=>{
      fb.className = "btn btn-light"
    })
  }else{
    document.body.className = "";
    $labels.forEach((l)=>{
      l.className = "form-label";
    })
    $inputs.forEach((i)=>{
      i.className = "form-control";
    })
    $("#switchCheck").forEach((t)=>{t.className = "form-check-input"});
    $(".fa-dice").forEach((f)=>{
      f.className = `fa-solid fa-dice scaled-md`;
    });
    $("a").forEach((a)=>{a.className = "link-dark"}), $("p").forEach((p)=>{p.className = "lead-xs my-2"});
    $formBtns.forEach((fb)=>{
      fb.className = "btn btn-dark"
    })
  }
})