<template>
  <section class="container-fluid">
    <div class="social-cards">
      <div class="social-card" v-for="card in cards" :key="card.id">
        <div class="social-card__image-container">
          <img
            v-for="(image, index) in card.images"
            :key="index"
            :src="image.url"
            alt="Product Image"
            class="social-card__image"
            v-show="activeImages[card.id] === index"
          />
        </div>
        <div class="social-card__toggles">
          <a
            v-for="(toggle, index) in card.toggles"
            :key="index"
            @click="toggleImage(card.id, index)"
            href="#"
            class="social-card__toggle"
          >
            {{ toggle }}
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { ref, reactive, onMounted } from 'vue';
import axios from 'axios';

export default {
  name: 'SocialCard',
  setup() {
    const cards = ref([]);
    const activeImages = reactive({});

    const fetchAirtableData = async () => {
      const apiKey = 'patkyObteQxuudbmI.5356211454b7e7a524d04c41d950c2243419a4a28a5ebe6dd8cd54a052852b37'; // Replace with your Airtable personal access token
      const airtableBaseId = 'appmEW5EOHHJyN9bB';
      const airtableTableName = 'tblTFiFDKGzsIO9kV';
      const url = `https://api.airtable.com/v0/${airtableBaseId}/${airtableTableName}`;

      try {
        const response = await axios.get(url, {
          headers: { Authorization: `Bearer ${apiKey}` },
        });

        const records = response.data.records;

        cards.value = records.map((record) => ({
          id: record.id,
          images: record.fields.Image ? record.fields.Image.map((image) => ({ url: image.url })) : [],
          toggles: ['Left', 'Right'], // Adjust this if more toggles are needed.
        }));

        // Initialize activeImages with the appropriate keys
        cards.value.forEach((card) => {
          activeImages[card.id] = 0;
        });
      } catch (error) {
        console.error('Error fetching Airtable data:', error);
      }
    };

    const toggleImage = (cardId, imageIndex) => {
      activeImages[cardId] = imageIndex;
    };

    onMounted(() => {
      fetchAirtableData();
    });

    return {
      cards,
      activeImages,
      toggleImage,
    };
  },
};
</script>

<style scoped>
.social-cards {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

.social-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 30%;
  margin-bottom: 20px;
}

.social-card__image-container {
  width: 100%;
  padding-bottom: 100%;
  position: relative;
}

.social-card__image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: opacity 0.5s;
}

.social-card__toggles {
  display: flex;
  justify-content: space-around;
  width: 100%;
  margin-top: 10px;
}

.social-card__toggle {
  padding: 5px 10px;
  background-color: transparent;
  color: #6b46c1;
  cursor: pointer;
  text-decoration: underline;
  transition: color 0.3s;
}

.social-card__toggle:hover {
  color: #9f7aea;
}

@media (max-width: 720px) {
  .social-card {
    width: 100%;
  }
}

@media (max-width: 380px) {
  .social-card__toggles {
    flex-direction: column;
  }

  .social-card__toggle {
    margin-bottom: 5px;
  }
}
</style>
