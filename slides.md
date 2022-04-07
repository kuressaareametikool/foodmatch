---
global:
  class: p-5 prose-headings:m-0 prose-headings:black/90 !prose-img:m-0

class: center p-8 bg-orange-500
---

<Icon id="dashicons:food" class="rotate-90 w-32 h-32 -ml-4 text-black/90" />

# FOODMATCH

<br /><br />

<div v-for="title in ['Log in with Google','Log in with Facebook','Log in with phone number']" class="border-2 border-black/90 text-black/90 font-medium text-center text-lg block w-full px-6 py-3 lg:px-6 lg:py-3 rounded-xl transition-all">
{{ title }}
</div>

---
class: center bg-orange-200 prose-h1:opacity-4 !place-items-start
---

# My number is

## + 372 <input type="number" class="w-32 bg-orange-200 border-none rounded focus:ring-2 outline-none ring-orange-300 font-semibold text-2xl" v-model="f.phone" />

<br />

<div class="border-2 border-black/90 text-black/90 font-medium text-center text-lg block w-full px-6 py-3 lg:px-6 lg:py-3 rounded-xl transition-all">
Continue
</div>

---
class: prose-h2:m-0 grid auto-rows-min gap-2
data:
  carousel:
    - title: a
      image: https://images.unsplash.com/photo-1505576633757-0ac1084af824?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80
    - title: b
---

<div class="flex justify-between content-center">
  <Icon id="dashicons:food" class="rotate-90 w-8 h-8 -ml-2" />
  <div class="px-3 py-1 rounded-lg bg-orange-500 text-white">Upgrade</div>
</div>


<Carousel :items="data.carousel" />

<br />

<div class="rounded-lg h-64 bg-cover bg-[url(https://images.unsplash.com/photo-1505576633757-0ac1084af824?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80)]" />
  
## John

#### 27 / Tallinn, Estonia

I believe my indentity is based on gourmet food. My favorite food to cook is sushi. Attention to detail is very important to me. I was born in Osaka Japan. I moved to the US when I was three.
