const sliderInit = () => {
    const sliderBtns = document.querySelectorAll('.course__slider .course__slider-btn')
    const sliderCourses = document.querySelector('.course__list')

    const sliderScrollBar = document.querySelector('.course__slider')
    const sliderScrollBarThumb = sliderScrollBar.querySelector('.course__slider-thumb')

    const sliderLeftMax = sliderCourses.scrollWidth - sliderCourses.clientWidth;

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
            sliderCourses.scrollLeft = scrollPosition
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
            const slideAmount = sliderCourses.clientWidth * direction
            sliderCourses.scrollBy({
                left: slideAmount,
                behavior: 'smooth'
            })
        })
    })

    const handleDisableBtn = () => {
        sliderBtns[0].disabled = sliderCourses.scrollLeft <= 0;
        sliderBtns[1].disabled = sliderCourses.scrollLeft >= sliderLeftMax;
    }

    const updateSlideThumbPosition = () => {
        const scrollPostion = sliderCourses.scrollLeft
        const thumbPosition = ((scrollPostion / sliderLeftMax) * (sliderScrollBar.clientWidth - sliderScrollBarThumb.offsetWidth) / 10)

        sliderScrollBarThumb.style.left = `${thumbPosition}rem`
    }

    sliderCourses.addEventListener('scroll', () => {
        handleDisableBtn()
        updateSlideThumbPosition()
    })
}

window.addEventListener('load', sliderInit)