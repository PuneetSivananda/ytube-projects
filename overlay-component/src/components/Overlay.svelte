<script lang="ts">
    import { isOverlayOpen } from "../stores/OverlayStore";
    import {fade} from "svelte/transition"
</script>

<!-- use this or stop the propogation for a click event
     on:click={()=>isOverlayOpen.set(false)}  -->
<div 
    class="w-screen h-screen fixed top-0 left-0 flex justify-center items-center bg-gray-100 opacity-90 rounded-md"
    on:click={()=>isOverlayOpen.set(false)}
    transition:fade
    >
    <div class="bg-gray-900 text-white rounded-md px-8 py-10 relative max-w-lg opacity-95 z-10"
        on:click|stopPropagation>
        <button class="absolute top-2 right-3 text-4xl text-gray-300 hover:-translate-y-0.5 transition-transform"
        on:click={()=>isOverlayOpen.set(false)}
        >&times;</button>
        <slot></slot>
    </div>
</div>
<style></style>