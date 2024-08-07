<template>
  <div class="bg-custom-image bg-cover bg-center h-screen text-white bg-transparent">
    <div class="mx-auto px-4">
      <div>
        <div class="flex justify-between items-center h-16 bg-transparent">
          <!-- Hamburger menu for small screens -->
          <div class="md:hidden">
            <button @click="isMenuOpen = !isMenuOpen" class="text-white focus:outline-none bg-transparent">
              <i class="pi pi-bars text-2xl"></i>
            </button>
          </div>

          <!-- Menu items for medium and large screens -->
          <div class="hidden md:flex items-center justify-center flex-grow bg-transparent">
            <nav class="flex gap-8 text-[20px]">
              <a href="#" class="hover:underline">Home</a>
              <a href="#" class="hover:underline">About</a>
              <a href="#" class="hover:underline">Products</a>
            </nav>
          </div>

          <div>
            <button class="bg-green-600 rounded-md p-4">Find House</button>
          </div>
        </div>
      </div>

      <!-- Mobile menu -->
      <div v-if="isMenuOpen" class="md:hidden mt-2">
        <nav class="flex flex-col gap-4 text-[20px]">
          <a href="#" class="hover:underline">Home</a>
          <a href="#" class="hover:underline">About</a>
          <a href="#" class="hover:underline">Products</a>
        </nav>
      </div>
    </div>

    <section class="featured-houses">
      <h3 class="flex justify-center font-bold">Featured Houses</h3>
      <div class="search-bar">
        <InputText v-model="searchQuery" placeholder="Search houses..." class="w-full" />
      </div>

      <div class="flex flex-wrap gap-4 justify-center mt-4">
        <Card v-for="house in filteredHouses" :key="house.id" style="width: 25rem; overflow: hidden">
          <template #header>
            <img :alt="house.title" :src="house.image" />
          </template>
          <template #title>{{ house.title }}</template>
          <template #subtitle>{{ house.location }}</template>
          <template #content>
            <p class="m-0">{{ house.description }}</p>
          </template>
          <template #footer>
            <div class="flex gap-4 mt-1">
              <Button label="More Details" class="w-full" @click="openModal(house)" />
            </div>
          </template>
        </Card>
      </div>
    </section>

    <div class="flex flex-row p-4 gap-4 justify-center">
      <section class="services">
        <div class="flex flex-row p-4 gap-4 justify-center">
          <Card v-for="service in services" :key="service.id" style="width: 25rem; overflow: hidden" @click="openModal(service)">
            <template #header>
              <img :alt="service.title" :src="service.image" />
            </template>
            <template #title>{{ service.title }}</template>
            <template #subtitle>{{ service.subtitle }}</template>
            <template #content>
              <p class="m-0">{{ service.description }}</p>
            </template>
            <template #footer>
              <div class="flex gap-4 mt-1">
                <Button label="View" class="w-full" @click="openModal(service)" />
              </div>
            </template>
          </Card>
        </div>

        <!-- Dialog Modal -->
        <Dialog v-model:visible="visible" modal header="Service Details" :style="{ width: '90%', maxWidth: '600px' }">
          <img :src="selectedService.image" alt="Service Image" class="w-full mb-4" />
          <h3>{{ selectedService.title }}</h3>
          <h4>{{ selectedService.subtitle }}</h4>
          <p>{{ selectedService.description }}</p>
          <div class="flex justify-end gap-2 mt-4">
            <Button type="button" label="Close" severity="secondary" @click="visible = false" />
          </div>
        </Dialog>
      </section>
    </div>

    <div class="pb-8">
      <section class="testimonials">
        <h2 class="text-center mb-4">What Our Clients Say</h2>
        <div class="flex flex-wrap gap-4 justify-center">
          <Card v-for="testimonial in testimonials" :key="testimonial.name" style="width: 20rem; overflow: hidden" class="testimonial-card">
            <template #header>
              <img :src="testimonial.image" alt="Client Photo" class="testimonial-image" />
            </template>
            <template #title>{{ testimonial.name }}</template>
            <template #subtitle>{{ testimonial.position }}</template>
            <template #content>
              <p class="m-0">"{{ testimonial.message }}"</p>
            </template>
            <template #footer>
              <div class="flex justify-end">
                <i class="pi pi-quote-right"></i>
              </div>
            </template>
          </Card>
        </div>
      </section>
    </div>

    <div class="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8 pt-8 bg-green-700 text-white px-4 py-8">
      <div class="mb-6 sm:mb-0 text-white">
        <h2 class="font-bold text-lg mb-3">Shop Categories</h2>
        <p class="mb-2">Office Furniture</p>
        <p class="mb-2">Home office Furniture</p>
      </div>
      <div class="mb-6 sm:mb-0">
        <h3 class="font-bold text-lg mb-3">Useful Links</h3>
        <p class="mb-2">Designs</p>
        <p class="mb-2">Careers</p>
      </div>
      <div class="mb-6 sm:mb-0">
        <h3 class="font-bold text-lg mb-3">Account</h3>
        <p class="mb-2">Login</p>
        <p class="mb-2">Cart</p>
      </div>
      <div>
        <h3 class="font-bold text-lg mb-3">About Company</h3>
        <p class="mb-2">Our Partners</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { Dialog } from 'primevue/dialog';
import { Button } from 'primevue/button';
import { Card } from 'primevue/card';
import { InputText } from 'primevue/inputtext';

const visible = ref(false);
const isMenuOpen = ref(false);
const selectedService = ref({});
const searchQuery = ref('');

const openModal = (service) => {
  selectedService.value = service;
  visible.value = true;
}

const testimonials = [
  {
    name: 'Jane Doe',
    position: 'CEO, Company A',
    message: 'This service was fantastic! It exceeded all our expectations.',
    image: 'https://randomuser.me/api/portraits/women/1.jpg',
  },
  {
    name: 'John Smith',
    position: 'Marketing Director, Company B',
    message: 'Absolutely brilliant experience. Highly recommend to everyone!',
    image: 'https://randomuser.me/api/portraits/men/1.jpg',
  },
  {
    name: 'Alice Johnson',
    position: 'Product Manager, Company C',
    message: 'Professional and efficient. The results speak for themselves.',
    image: 'https://randomuser.me/api/portraits/women/2.jpg',
  },
  {
    name: 'Bob Brown',
    position: 'Software Engineer, Company D',
    message: 'A top-notch service that delivered exactly what we needed.',
    image: 'https://randomuser.me/api/portraits/men/2.jpg',
  },
];

const services = [
  {
    id: 1,
    title: 'Property Management',
    subtitle: 'Find a house to rent',
    description: 'Comprehensive management of rental properties including maintenance and tenant relations.',
    image: 'https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg',
  },
  {
    id: 2,
    title: 'Tenant Placement',
    subtitle: 'Find a house to rent',
    description: 'Finding and placing qualified tenants for your rental properties.',
    image: 'https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg',
  },
  {
    id: 3,
    title: 'Market Analysis',
    subtitle: 'Find a house to rent',
    description: 'Detailed market analysis to help you set competitive rental prices and attract more tenants.',
    image: 'https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg',
  },
];

const houses = [
  {
    id: 1,
    title: 'Cozy Cottage',
    location: 'New York',
    description: 'A charming cottage in the heart of New York City.',
    image: 'https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg',
  },
  {
    id: 2,
    title: 'Modern Apartment',
    location: 'San Francisco',
    description: 'A modern apartment with stunning city views.',
    image: 'https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg',
  },
  {
    id: 3,
    title: 'Spacious Villa',
    location: 'Los Angeles',
    description: 'A spacious villa with a large garden.',
    image: 'https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg',
  },
  {
    id: 4,
    title: 'Chic Studio',
    location: 'Chicago',
    description: 'A chic studio in the vibrant city of Chicago.',
    image: 'https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg',
  },
  {
    id: 5,
    title: 'Chic Studio',
    location: 'Chicago',
    description: 'A chic studio in the vibrant city of Chicago.',
    image: 'https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg',
  },
  {
    id: 6,
    title: 'Chic Studio',
    location: 'Chicago',
    description: 'A chic studio in the vibrant city of Chicago.',
    image: 'https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg',
  },
];

const filteredHouses = computed(() => {
  const query = searchQuery.value.toLowerCase();
  return houses.filter(house =>
    house.title.toLowerCase().includes(query) ||
    house.location.toLowerCase().includes(query) ||
    house.description.toLowerCase().includes(query)
  );
});
</script>

<style scoped>
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
</style>