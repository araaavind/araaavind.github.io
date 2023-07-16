
function populateSkills() {
  for (const cat in skills) {
    const skillContainer = $(`<div class="skill-container"></div>`);
    const skillCategory = $(`<div class="skill-category"><span class="category-text">${cat}</span></div>`);
    skillContainer.append(skillCategory);
    let skillStrip = $(`<div class="skill-strip"></div>`);
    let marqueeContainer = $(`<div class="marquee-container"></div>`);
    let marqueeFirst = $(`<div class="marquee first" style="animation: marquee-first ${skills[cat].duration} linear infinite"></div>`);
    let marqueeSecond = $(`<div class="marquee second" style="animation: marquee-second ${skills[cat].duration} linear infinite"></div>`);
    skillContainer.append(skillStrip);
    skillStrip.append(marqueeContainer);
    marqueeContainer.append(marqueeFirst);
    marqueeContainer.append(marqueeSecond);

    skills[cat].data.forEach((skill, index) => {
      if ($(window).width() < 1400 && index != 0 && index % 4 == 0) {
        // skillStrip = $(`<div class="skill-strip"></div>`);
        marqueeContainer = $(`<div class="marquee-container"></div>`);
        marqueeFirst = $(`<div class="marquee first" style="animation: marquee-first ${skills[cat].duration} linear infinite"></div>`);
        marqueeSecond = $(`<div class="marquee second" style="animation: marquee-second ${skills[cat].duration} linear infinite"></div>`);
        // skillContainer.append(skillStrip);
        skillStrip.append(marqueeContainer);
        marqueeContainer.append(marqueeFirst);
        marqueeContainer.append(marqueeSecond);
      } else if ($(window).width() < 400 && index != 0 && index % 2 == 0) {
        // skillStrip = $(`<div class="skill-strip"></div>`);
        marqueeContainer = $(`<div class="marquee-container"></div>`);
        marqueeFirst = $(`<div class="marquee first" style="animation: marquee-first ${skills[cat].duration} linear infinite"></div>`);
        marqueeSecond = $(`<div class="marquee second" style="animation: marquee-second ${skills[cat].duration} linear infinite"></div>`);
        // skillContainer.append(skillStrip);
        skillStrip.append(marqueeContainer);
        marqueeContainer.append(marqueeFirst);
        marqueeContainer.append(marqueeSecond);
      }
      marqueeFirst.append($(`<span class=skill-span><i class=${skill.icon}></i>${skill.name}</span>`));
      marqueeSecond.append($(`<span class=skill-span><i class=${skill.icon}></i>${skill.name}</span>`));
    });
    $('.skills').children('.max-width').append(skillContainer);
  }
}
populateSkills();

$(document).ready(() => {
  $(window).scroll(() => {
    if (this.scrollY > 20) {
      $('.navbar').addClass("sticky");
      $('.logo').css('visibility', "visible");
    } else {
      $('.navbar').removeClass("sticky");
      $('.logo').css('visibility', "hidden");
    }

    if (this.scrollY > 500) {
      $('.scroll-up-btn').addClass("show");
    } else {
      $('.scroll-up-btn').removeClass("show");
    }
  });

  $('.scroll-up-btn').click(() => {
    $('html').animate({ scrollTop: 0 });
  });

  $('.menu-btn').click(() => {
    $('.navbar .menu').toggleClass("active");
    $('.menu-btn i').toggleClass("active");
  });
});