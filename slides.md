---
global:
  class: p-5 !prose-headings:m-0 prose-headings:black/90 !prose-img:m-0 bg-orange-200
---

<AnimatedBackground class="center">

<Logo class="spin w-24 h-24 -ml-4 text-orange-500" />

<br />

<div class="text-medium text-4xl uppercase text-orange-500">Foodmatch</div>

<br /><br />

<div class="button opacity-30">Sign in with Google</div>

<div class="button opacity-30">Sign in with Facebook</div>

<div class="button" v-on:click="next()">Sign in with mobile number</div>


</Background>

---
class: bg-orange-200 prose-h1:opacity-4 !place-items-start
---

<Background class="grid auto-rows-min p-8 gap-8">

<br />
<br />
<br />

# My number is

<div class="font-semibold text-2xl border-b-2 border-black/80 flex gap-2 items-center w-full">
+372 <input type="number" class="w-[90%] bg-transparent border-none rounded focus:ring-2 outline-none ring-orange-200 font-semibold text-2xl" v-model="f.phone" />
</div>

We will send a text with a verification code. Message and data rates may apply. Learn what happens when your number changes.

<div class="button" v-on:click="next()">Continue</div>

</Background>

---
class: bg-orange-200 prose-h1:opacity-4 !place-items-start
---

<Background class="grid auto-rows-min p-8 gap-8">

<br />
<br />
<br />

# My code is

<div class="font-semibold text-2xl flex gap-2 items-center w-full">
<div v-for="i in 6" class="border-b-2 border-black/80">
<input type="number" minlength="1" maxlength="1" class="w-full bg-transparent border-none rounded focus:ring-2 outline-none ring-orange-200 font-semibold text-2xl" v-model="f.code" />
</div>
</div>

We will send a text with a verification code. Message and data rates may apply. Learn what happens when your number changes.

<div class="button" v-on:click="next()">Continue</div>

</Background>

---
class: prose-h2:m-0 grid auto-rows-min gap-2 bg-orange-200
data:
  carousel:
    - title: RECOMMEND
      image: https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=781&q=80
    - title: LIKES YOU
      image: https://images.unsplash.com/photo-1565958011703-44f9829ba187?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80
    - title: MATCH %
      image: https://images.unsplash.com/photo-1482049016688-2d3e1b311543?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=710&q=80
    - title: NEARBY
      image: https://images.unsplash.com/photo-1484723091739-30a097e8f929?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=749&q=80
    - title: ONLINE
      image: https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80
    - title: POPULAR
      image: https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80
---
<div class="grid grid-cols-3 align-center justify-between">
<Icon id="ri:menu-2-fill" class="w-8 h-8" />
<div class="text-medium text-xl uppercase text-orange-500 text-center">Foodmatch</div>
<div class="flex justify-end">
  <Icon id="mdi:bell-outline" class="w-8 h-8" />
</div>
</div>

<br />

<Carousel :items="data.carousel" />

<br />

<div class="relative h-[60vh] rounded-lg overflow-hidden">
  <div class="absolute inset-0 bg-cover bg-[url(https://images.unsplash.com/photo-1505576633757-0ac1084af824?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80)]" />
  <div class="absolute inset-0 bg-gradient-to-b from-orange-200/0 to-orange-200/100" />
  <div class="p-4 absolute bottom-0 left-0 right-0 flex justify-between items-center">
    <div>
      <div class="text-2xl">John, 27</div>
      <div class="text-xl">Food is life</div>
    </div>
    <div class="text-black/50 w-14 h-14 inline-grid place-content-center rounded-full border-[3px] border-black/50 font-medium">23%</div>
  </div>
</div>

I believe my indentity is based on gourmet food. My favorite food to cook is sushi. Attention to detail is very important to me. I was born in Osaka Japan. I moved to the US when I was three.

<div class="h-24" />

<div class="fixed right-0 bottom-0 left-0 p-8 grid grid-cols-4 gap-4 bg-orange-200">
  <Logo class="w-10 h-10 opacity-90" />
  <Icon id="ic:round-travel-explore" class="w-10 h-10 opacity-90" />
  <Icon id="eva:message-circle-outline" class="w-10 h-10 opacity-90" />
  <Icon id="gg:profile" class="w-10 h-10 opacity-90" />
</div>

---
class: p-8
---


# Styleguide

<br />

## Colors

<br />

<div class="bg-orange-200 p-4">bg-orange-200</div>

<div class="bg-orange-300 p-4">bg-orange-300</div>

<div class="bg-orange-500 p-4">bg-orange-500</div>

<br />

## Font

<br />

[Rubik from Google Fonts](https://fonts.google.com/specimen/Rubik?query=rubik)

<br />

## Font sizes

<br />

<div class="text-xs">text-xs 12px</div>
<div class="text-sm">text-sm 14px</div>
<div class="text-base">text-base 16px</div>
<div class="text-lg">text-lg 18px</div>
<div class="text-xl">text-xl 20px</div>
<div class="text-2xl">text-2xl 24px</div>
<div class="text-3xl">text-3xl 30px</div>
<div class="text-4xl">text-4xl 36px</div>

<br />

## Font weigths

<br />

<div class="text-2xl font-normal">font-normal 400</div>
<div class="text-2xl font-medium">font-medium 500</div>
<div class="text-2xl font-semibold">font-medium 600</div>
<div class="text-2xl font-semibold">font-bold 700</div>

<br />
