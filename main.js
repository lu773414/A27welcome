const { createApp, ref, onMounted  } = Vue

createApp({
    setup() {
        const page = ref(1);
        const answer = ref('');
        const choose = ref(['','',' ']);

        const setPage = (newPage) => {
            page.value = newPage;
        }

        const chooseAnswer = (value) => {
            choose.value[page.value-1] = value;
            page.value = page.value +1;
            answer.value = `./${choose.value.join('')}.png`
        }

        onMounted(() => {
            setTimeout(() => {
                setPage(2)
                console.log("1秒後自動跳到第2頁")
            }, 1500)
        })

        return {
            page,
            answer,
            choose,
            setPage,
            chooseAnswer
        }
    }
}).mount('#app')
