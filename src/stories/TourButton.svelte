<script lang="ts">

    import { spring } from 'svelte/motion';

    let isBooped = false;

    function setIsBooped(val){
        isBooped = val;
    }

    function handleFocus(){
        isBooped = true;
    }

    function handleClick() {
		isBooped = true;
	}

    function boop(node, params) {	
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

<div class="button" tabindex="0" on:mouseenter={() => isBooped = true} on:click={handleClick} on:focus={handleFocus}>
    <p class="text">Start your tour</p>
    <span use:boop={{isBooped, x: 5, timing: 200, setter: setIsBooped}}>
        <svg class="svg-arrow" width="13" height="22" viewBox="0 0 13 22" fill="none">
            <path d="M1.44165 20.5881L10.4526 11.0587L1.44165 1.52931" stroke="#2A2A2A" stroke-width="2.4"/>
        </svg>
    </span>        
</div>

<style>

    .text {
        display: inline-block;
        font-family: 'Montserrat';
        font-size: 20px;
        font-weight: bold;
        line-height: 40px;
        margin: 0px;
        color: #2A2A2A
    }

    .button {
        display: inline-block;
        position: relative;
        border-radius: 24px;
        padding-left: 1.35rem;
        padding-top: 0.3rem;
        padding-bottom: 0.3rem;
        padding-right: 1.5rem;
        border: none;
        background-color: #FBE26B;
        cursor: pointer;
        display: inline-block;
        font-family: 'Montserrat';
        font-size: 20px;
        font-weight: bold;
        line-height: 40px;
        margin: 0px;
        color: #2A2A2A;
        font-size: 20px;
    }

    .svg-arrow {
        display: inline-block;
        position: relative;
        padding-left: 1rem;
        vertical-align: middle;
        transform: translateY(-0.15rem);
    }

</style>

