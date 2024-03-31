const sliderInit = () => {
    const sliderBtns = document.querySelectorAll('.course__slider-btn')

    const courseList = document.querySelector('.course__list')

    const sliderScrollBar = document.querySelector('.course__slider')
    const sliderScrollBarThumb = sliderScrollBar.querySelector('.course__slider-thumb')

    const sliderLeftMax = courseList.scrollWidth - courseList.clientWidth;

    sliderScrollBarThumb.addEventListener('mousedown', (event) => {
        const startX = event.clientX
        const thumbPosition = sliderScrollBarThumb.offsetLeft

        const handleMouseMove = (event) => {
            const deltaX = event.clientX - startX
            const newThumbPosition = thumbPosition + deltaX
            const maxThumbPosition = sliderScrollBar.getBoundingClientRect().width - sliderScrollBarThumb.offsetWidth

            const thumbBoundary = Math.max(0, Math.min(maxThumbPosition, newThumbPosition))
            const scrollPosition = (thumbBoundary / maxThumbPosition) * sliderLeftMax

            sliderScrollBarThumb.style.left = `${thumbBoundary}`
            courseList.scrollLeft = scrollPosition
        }

        const handleMouseUp = () => {
            document.removeEventListener('mousemove', handleMouseMove)
            document.removeEventListener('mouseup', handleMouseUp)
        }

        document.addEventListener('mousemove', handleMouseMove)
        document.addEventListener('mouseup', handleMouseUp)

    })

    sliderBtns.forEach((button) => {
        button.addEventListener('click', () => {
            const direction = button.id === 'prev-btn' ? -1 : 1

            const slideAmount = courseList.clientWidth * direction

            courseList.scrollBy({
                left: slideAmount,
                behavior: 'smooth'
            })
        })
    })

    const handleDisableBtn = () => {
        sliderBtns[0].disabled = courseList.scrollLeft <= 0;
        sliderBtns[1].disabled = courseList.scrollLeft >= sliderLeftMax;
    }

    const updateSlideThumbPosition = () => {
        const scrollPostion = courseList.scrollLeft
        const thumbPosition = ((scrollPostion / sliderLeftMax) * (sliderScrollBar.clientWidth - sliderScrollBarThumb.offsetWidth))

        sliderScrollBarThumb.style.left = `${thumbPosition}px`
    }

    courseList.addEventListener('scroll', () => {
        handleDisableBtn()
        updateSlideThumbPosition()
    })
}

window.addEventListener('load', sliderInit)