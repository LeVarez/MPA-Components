<script lang="ts" context="module">
    import { spring } from 'svelte/motion';

    export function boop(node, params) {	
        let { setter } = params;
        let springyRotation = spring({ x: 0, y: 0, rotation: 0, scale: 1} , {
            stiffness: 0.1,
            damping: 0.15
        });
        
        node.style = `display: inline-block`;
        
        const unsubscribe = springyRotation.subscribe(({ x, y, rotation, scale }) => {
            node.style.transform = `translate(${x}px, ${y}px) rotate(${rotation}deg) scale(${scale})`;
        })
        
        return {
            update({isBooped, x = 0, y = 0, rotation = 0, scale = 1, timing}) {
                springyRotation.set(isBooped ? { x, y, rotation, scale } : { x: 0, y: 0, rotation: 0, scale: 1});
                if (isBooped) {
                    window.setTimeout(() => setter(false), timing);
                }
            },
            destroy() {
                unsubscribe();
            }
        }
    }
</script>