<template>
    <div class="w-screen h-screen flex font-Space flex-col md:flex-row">
        <div class="relative bg-mobile h-56 md:bg-desktop md:w-2/6 md:h-screen">
            <div
                class="absolute h-40 w-72 md:h-60 md:w-96 right-4 top-8 md:-right-1/2 md:top-2/3 md:-translate-y-1/2 bg-card-back bg-contain bg-no-repeat">
                <div class="text-white text-xs absolute top-1/2 -translate-y-1/2 right-9">{{ card.cvc || "123" }}</div>
            </div>
            <div
                class="absolute h-40 w-72 md:h-60 md:w-96 left-4 -bottom-14 md:top-1/3 md:left-1/2 md:-translate-y-1/2 bg-card-front bg-contain bg-no-repeat">
                <img class="absolute top-4 left-4 w-14" src="src/assets/images/card-logo.svg" alt="">
                <div class="absolute text-white text-lg tracking-widest left-6 bottom-12">{{ card.number || "9591 6489 6389 1011" }}</div>
                <div class="absolute text-white text-xs uppercase left-6 bottom-6">{{ card.name || "Jane Appleseed" }}
                </div>
                <div class="absolute text-white text-xs uppercase right-6 bottom-6">{{ card.month || "09" }}/{{ card.year || "26" }}</div>
            </div>
        </div>
        <div class="md:w-4/6">
            <div class="mt-14 p-6">
                <label class="block">
                    <span class="text-gray-700 uppercase">Cardholder name</span>
                    <input v-model="card.name" type="text" class="
                    mt-1
                    block
                    w-full
                    rounded-md
                    border-gray-300
                    shadow-sm
                    focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50
                  " placeholder="e.g. Jane Appleseed">
                </label>
                <label class="block">
                    <span class="text-gray-700 uppercase">Card Number</span>
                    <input v-model="card.number" type="text" class="
                    mt-1
                    block
                    w-full
                    rounded-md
                    border-gray-300
                    shadow-sm
                    focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50
                  " placeholder="e.g. 1234 5678 9123 0000">
                </label>
                <div class="flex">
                    <label class="block">
                        <span class="text-gray-700 uppercase">Exp. Date (MM/YY)</span>
                        <div class="flex">
                            <input  v-model="card.month" type="text" class="
                    mt-1
                    block
                    w-full
                    rounded-md
                    border-gray-300
                    shadow-sm
                    focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50
                  " placeholder="MM">
                            <input  v-model="card.year" type="text" class="
                    mt-1
                    block
                    w-full
                    rounded-md
                    border-gray-300
                    shadow-sm
                    focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50
                  " placeholder="YY">
                        </div>
                    </label>
                    <label class="block">
                        <span class="text-gray-700 uppercase">CVC</span>
                            <input  v-model="card.cvc" type="text" class="
                    mt-1
                    block
                    w-full
                    rounded-md
                    border-gray-300
                    shadow-sm
                    focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50
                  " placeholder="e.g. 123">
                    </label>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const card = ref({})



</script>