<template>
    <Navbar />


    <div class="bg-custom-image bg-cover bg-center h-[820px] text-white bg-transparent">



        <div class="mx-auto px-4">
            <div class="flex flex-col">
                <div class="flex items-center h-16 bg-transparent relative z-20">
                    <div class="md:hidden flex items-center">
                        <button @click="toggleMenu" class="text-white focus:outline-none bg-transparent z-30">
                            <i class="pi pi-bars text-2xl"></i>
                        </button>
                    </div>
                </div>


                <div class="flex items-center justify-center flex-grow pb-2 pt-[400px]">
                    <div class="text-center px-4 md:px-8">
                        <h1 class="text-2xl md:leading-[90px] leading-[80px] text-[40px] md:text-[80px] font-medium mb-4">
                            More Comfortable.
                            <br>More
                            Classy.
                        </h1>
                        <h1>Make your living experience even more memorable</h1>
                        <!-- <p class="text-base md:text-lg">Get to discover our products and services tailored just for you.</p> -->
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="flex md:flex-row flex-col md:space-y-0 space-y-8 md:space-x-6 my-10 max-w-[800px] mx-auto items-center">
        <div
            class="flex flex-col my-auto bg-white border shadow-sm rounded-xl dark:bg-neutral-100 md:h-[400px] h-[300px] md:w-[500px] w-[250px] dark:border-neutral-300 dark:shadow-neutral-50/70">
            <div class="p-4 md:p-10  mx-auto my-auto">
                <div class="flex flex-col space-y-2 items-center">
                    <img src="/contact-us.svg" class="w-[80px] " alt="" srcset="">
                    <h3 class="text-[40px] font-bold text-gray-700 ">
                        Call us
                    </h3>
                </div>
                <p class="mt-2 text-gray-600 text-[20px] dark:text-neutral-400 text-center">
                    +1-917-609-4597
                </p>

            </div>
        </div>

        <div
            class="flex flex-col my-auto bg-white border shadow-sm rounded-xl dark:bg-neutral-100  md:h-[400px] h-[300px] md:w-[500px] w-[250px] dark:border-neutral-300 dark:shadow-neutral-50/70">
            <div class="p-4 md:p-10  mx-auto my-auto">
                <div class="flex flex-col space-y-2 items-center">
                    <img src="/location.svg" class="w-[80px] " alt="" srcset="">
                    <h3 class="text-[40px] font-bold text-gray-700 ">
                        Visit us
                    </h3>
                </div>
                <p class="mt-2 text-gray-600 text-[20px] dark:text-neutral-400 text-center">
                    USA, NewYork
                </p>

            </div>
        </div>

        <div
            class="flex flex-col my-auto bg-white border shadow-sm rounded-xl dark:bg-neutral-100  md:h-[400px] h-[300px] md:w-[500px] w-[250px] dark:border-neutral-300 dark:shadow-neutral-50/70">
            <div class="p-4 md:p-10  mx-auto my-auto">
                <div class="flex flex-col space-y-2 items-center">
                    <img src="/whatsapp.svg" class="w-[80px] " alt="" srcset="">
                    <h3 class="text-[40px] font-bold text-gray-700 ">
                        Mail us
                    </h3>
                </div>
                <p class="mt-2 text-gray-600 text-[20px] dark:text-neutral-400 text-center">
                    info@zemy-group.com
                </p>

            </div>
        </div>



    </div>

    <footer class="mycol !text-white p-4 flex justify-center">
        <div class="container mx-auto flex flex-wrap flex-col md:flex-row justify-between items-center">
            <div class="text-center md:text-left mb-4 md:mb-0">
                <p class="text-sm mb-2 !text-white">&copy; 2024 Zemy Group LLC. All Rights Reserved.</p>
                <p class="text-sm">
                    <a href="#" class="hover:text-gray-400 !text-white">Privacy Policy</a> |
                    <a href="#" class="hover:text-gray-400  !text-white">Terms of Service</a>
                </p>
            </div>
            <div class="flex justify-center md:justify-end space-x-4">
                <a href="#" class="text-white hover:text-gray-400"><i class="fab fa-facebook-f"></i></a>
                <a href="#" class="text-white hover:text-gray-400"><i class="fab fa-twitter"></i></a>
                <a href="#" class="text-white hover:text-gray-400"><i class="fab fa-linkedin-in"></i></a>
                <a href="#" class="text-white hover:text-gray-400"><i class="fab fa-instagram"></i></a>
            </div>
        </div>
    </footer>
</template>


<script setup>
import Navbar from '~/layouts/navbar.vue';
</script>

<style scoped>
.bg-custom-image {
    background-image: url('/hero-2.jpg');
}

.services {
    padding: 4rem 2rem;
    background-color: #f9f9f9;
}

.container {
    max-width: 1200px;
    margin: 0 auto;
}

h2 {
    text-align: center;
    margin-bottom: 2rem;
}

.service-list {
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
    justify-content: center;
}

.service-item {
    background: #fff;
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 1.5rem;
    text-align: center;
    width: 300px;
}

.service-icon {
    max-width: 100px;
    height: auto;
    margin-bottom: 1rem;
}

h3 {
    margin: 1rem 0;
}

p {
    color: #555;
}

.featured-houses {
    padding: 4rem 2rem;
    background-color: #f9f9f9;
}

.search-bar {
    max-width: 600px;
    margin: 0 auto;
    margin-bottom: 2rem;
}

.search-bar .p-inputtext {
    width: 100%;
}

.mycol {
    background-color: rgb(158, 40, 41);
}
</style>