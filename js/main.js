// fadein
$(function () {
  $(window).on("load scroll", function () {
    $(".fadeIn1").each(function () {
      //ターゲットの位置を取得
      var target = $(this).offset().top;
      //スクロール量を取得
      var scroll = $(window).scrollTop();
      //ウィンドウの高さを取得
      var height = $(window).height();
      //ターゲットまでスクロールするとフェードインする
      if (scroll > target - height) {
        //クラスを付与
        $(this).addClass("faded");
      }
    });
  });
});
$(function () {
  $(window).on("load scroll", function () {
    $(".fadeIn2").each(function () {
      var target = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var height = $(window).height();
      if (scroll > target - height) {
        $(this).addClass("faded");
      }
    });
  });
});
$(function () {
  $(window).on("load scroll", function () {
    $(".fadeIn3").each(function () {
      var target = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var height = $(window).height();
      if (scroll > target - height) {
        $(this).addClass("faded");
      }
    });
  });
});
$(function () {
  $(window).on("load scroll", function () {
    $(".fadeIn4").each(function () {
      var target = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var height = $(window).height();
      if (scroll > target - height) {
        $(this).addClass("faded");
      }
    });
  });
});

// hover

$('.brand-wrapper').hover(function () {
    $(this).addClass('hover');
}, function () {
    $(this).removeClass('hover');
})

// validation

$("form").submit(function () {
  let formName = $("form [name=name]");
  let formEMail = $("form [name=email]");
  let formContent = $("form [name=content]");
  let errors = {};
  const errorMessage = $(".error");
  const emailReg = /^[A-Za-z0-9]{1}[A-Za-z0-9_.-]*@{1}[A-Za-z0-9_.-]{1,}\.[A-Za-z0-9]{1,}$/;

  errorMessage.empty();

  if (formName.val() === "") {
    errors.name = "blank";
    errorMessage.append("<p>お名前を入力してください</p>");
  }
  if (formEMail.val() === "") {
    errors.email = "blank";
    errorMessage.append("<p>メールアドレスを入力してください</p>");
  } else if (!emailReg.test(formEMail.val())) {
    //emailの形式チェック
    errors.email = "email";
    errorMessage.append("<p>メールアドレスを正しく入力してください</p>");
  }
  if (formContent.val() === "") {
    errors.content = "blank";
    errorMessage.append("<p>お問い合わせ内容を入力してください</p>");
  }

  if (Object.keys(errors).length > 0) {
    return false;
  }
});
