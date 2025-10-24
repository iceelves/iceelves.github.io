# What is Pano Video Stitching
Panoramic video stitching is an innovative monitoring solution based on computer vision, graphics, and multi-sensor fusion technology. Its core lies in real-time stitching of video streams with overlapping areas captured by multiple cameras into seamless panoramic images through software algorithms, forming ultra wide viewing angles or stereoscopic monitoring scenes. This technology breaks through the limitations of traditional single camera viewing angles, eliminates image fragmentation and information silos, and achieves dynamic perception of large scenes with "one screen overview".

<script>
import ImageOverlay from '/zh/Pano/components/ImageOverlay.vue'

export default {
  components: {
    ImageOverlay
  }
};
</script>

<style scoped>
.image-overlay-container {
  height: 160px;
}

/* 移动端适配 */
@media (max-width: 768px) {
  .image-overlay-container {
    aspect-ratio: 16 / 9;
    height: auto;
  }
}
</style>

<ImageOverlay height="100px"
    :images="[
    '/Pano/pano1.jpg',
    '/Pano/pano2.jpg'
    ]" 
    :duration="5000"
/>