<template>
  <section id="curriculum" class="container-fluid bg-nt-100 curriculum-block">
    <!-- Education Section -->
    <div class="title-wrapper">
      <h2 class="txt-ss-h3 txt-nt-10">Education</h2>
    </div>
    <div class="list-container">
      <!-- Looping through Education data -->
      <div class="list-row-wrapper" v-for="(item, index) in education" :key="index">
        <div class="divider mb-xs"></div>
        <div class="list-row">
          <p class="list-item txt-nt-10">{{ item.type }}</p>
          <p class="list-item txt-nt-10">{{ item.school }}</p>
          <p class="list-item txt-gr-30">{{ item.city }}</p>
          <p class="list-item txt-gr-30">{{ item.year }}</p>
        </div>
      </div>
    </div>
    <!-- CTA BUTTONS
    <div class="cta-wrapper container-fluid no-x-padding">
      <div class="cta-buttonbar">
        <button class="cta-button">
          <img class="link-arrow" src="/assets/arrow-right-link.png" alt="arrow">
          <a download target="_blank" href="/assets/janhuysmans-curriculum-vitae@pdf.pdf" class="link-text">Download my resume</a>
        </button>
      </div>
    </div> -->
  </section>

  <section id="work" class="container-fluid bg-nt-100 curriculum-block">
    <!-- Exhibitions Section -->
    <div class="title-wrapper">
      <h2 class="txt-ss-h3 txt-nt-10">Work</h2>
    </div>
    <div class="list-container">
      <!-- Looping through Exhibitions data -->
      <div class="list-row-wrapper" v-for="(job, index) in jobs" :key="index">
        <div class="divider mb-xs"></div>
        <div class="list-row">
          <p class="list-item txt-nt-10">{{ job.company }}</p>
          <p class="list-item txt-nt-10">{{ job.title }}</p>
          <p class="list-item txt-gr-30">{{ job.type }}</p>
          <p class="list-item txt-gr-30">{{ job.year }}</p>
        </div>
      </div>
    </div>
    <!-- CTA BUTTONS -->
    <div class="cta-wrapper container-fluid no-x-padding">
      <div class="cta-buttonbar">
        <button class="cta-button">
          <img class="link-arrow" src="/assets/arrow-right-link.png" alt="arrow">
          <a download target="_blank" href="/assets/janhuysmans-curriculum-vitae@pdf.pdf" class="link-text">Download my resume</a>
        </button>
      </div>
    </div>
  </section>

  <section id="exhibitions" class="container-fluid bg-pp-30 curriculum-block">
    <!-- Exhibitions Section -->
    <div class="title-wrapper">
      <h2 class="txt-ss-h3 txt-nt-100">Exhibitions</h2>
    </div>
    <div class="list-container">
      <!-- Looping through Exhibitions data -->
      <div class="list-row-wrapper" v-for="(exhibit, index) in exhibitions" :key="index">
        <div class="divider-dark mb-xs"></div>
        <div class="list-row">
          <p class="list-item txt-nt-1O0">{{ exhibit.title }}</p>
          <p class="list-item txt-nt-100">{{ exhibit.location }}</p>
          <p class="list-item txt-nt-60">{{ exhibit.city }}</p>
          <p class="list-item txt-nt-60">{{ exhibit.year }}</p>
        </div>
      </div>
    </div>
  </section>

</template>
  
  <script>
  export default {
    data() {
      return {
        // Education data array
        education: [
          { type: "Architecture", school: "PiKoH", city: "Hasselt", year: "2011" },
          { type: "Audiovisual Arts", school: "School of Arts", city: "Genk", year: "2012-13" },
          { type: "Film", school: "Royal Academy of Fine Arts", city: "Ghent", year: "2013-14" },
          { type: "Fine Arts", school: "St. Lucas, School of Arts", city: "Brussels", year: "2014-15" },
          { type: "Industrial Design", school: "University of Antwerp", city: "Antwerp", year: "2015-17"},
          { type: "Digital Design", school: "PXL University College", city: "Hasselt", year: "22-24" },
        ],


        // Work data array
        jobs: [
        {
          company: "Made",
          title: "DIGITAL DESIGNER",
          year: "2023-2024",
          type: "INTERN"
        },
        {
          company: "DESCO",
          title: "Interior Sales ADVISOR",
          year: "2019-2022",
          type: "FULLTIME"
        },
        {
          company: "IMPERMO",
          title: "Interior Sales ADVISOR",
          year: "2018-2019",
          type: "FULLTIME"
        },
        {
          company: "IPG",
          title: "CONTACT AGENT (NL/FR)",
          year: "2017-2018",
          type: "FULLTIME"
        },
        ],
        
        // Exhibitions data array
        exhibitions: [
          { title: "EXIT", location: "C-Mine", city: "Genk", year: "2014" },
          { title: "no title", location: "Kuiperskaai", city: "Ghent", year: "2015" },
          { title: "Gallery Show", location: "Jan Colle", city: "Ghent", year: "2015" },
          { title: "Poetry Sessions", location: "Fatima", city: "Ghent", year: "2016" },
          { title: "M-ART", location: "CC-Getouw", city: "Mol", year: "2016" },
          { title: "Strange Loops", location: "Gare Brussels", city: "Brussels", year: "2016" },
          { title: "Shape to Come", location: "KC België", city: "Hasselt", year: "2017" },
          { title: "M-ART Residence", location: "M-ART", city: "Mol", year: "2016" },
          { title: "M-ART Takeover", location: "Jakob Smitsmuseum", city: "Mol", year: "2017" },
          { title: "Nuits Blanches", location: "Gare Brussels", city: "Brussels", year: "2017" },
          { title: "Chaos Studio", location: "A Warehouse", city: "Antwerp", year: "2019" },
          { title: "Transit", location: "Ampere", city: "Antwerp", year: "2019" },
          { title: "Print Fair", location: "Antwerp Tower", city: "Antwerp", year: "2021" },
        ]
      };
    },
  };
  </script>
  
  <style lang="scss">

  </style>
  