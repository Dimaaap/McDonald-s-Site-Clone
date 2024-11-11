import React from 'react'

export const AnswerQuestion = () => {
  return (
    <div>
        <QuestionHeader text="Як влаштуватись на роботу 
            в Макдональдз?" isEven={ true } />
        <AnswerText text={
            <>
                <p className="text-xl">
                    Для цього Вам необхідно заповнити анкету 
                    для працевлаштування. Ви можете подати 
                    її двома способами: заповнити онлайн-анкету
                    на {" "}
                    <Link href="#" className="text-blue-500">
                        нашому сайті
                    </Link> {" "}
                    або заповнити паперову анкету безпосередньо у закладі, 
                    який Вас цікавить, і віддати її менеджеру закладу.
                </p>
                <p className="text-xl">
                    Після заповнення анкету розглянуть менеджери 
                    закладу.
                </p>
            </>
        } />
    </div>
  )
}

