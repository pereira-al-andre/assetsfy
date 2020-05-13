
class LetItHappen
{
    constructor()
    {
        this.SignEvent()
    }

    SignEvent()
    {
        const signContent = 
        `
            <section class="sign-modal d-flex flex-column justify-content-center align-items-center">        
            <h3> Fazer Login </h3>
            <article>
                <span class="material-icons rounded-circle" id="close-sign-modal"> close </span>
                
                <form>
                    <div class="form-group">
                        <label for="exampleInputEmail1">Seu email</label>
                        <input type="email" name="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                            placeholder="Seu email">
                    </div>

                    <div class="form-group">
                        <label for="exampleInputPassword1">Senha</label>
                        <input type="password" name="pwd" class="form-control" id="exampleInputPassword1" placeholder="Senha">
                    </div>

                    <button type="submit" class="btn">Entrar</button>
                </form>
            </article>
            </section>

        `

        const singUpContent = 
        `
        <section class="sign-modal d-flex flex-column justify-content-center align-items-center">        
        <article class="services">
        <span class="material-icons rounded-circle" id="close-sign-modal"> close </span>
            <article class="row container">
            <div class="card mb-1">
                <div class="card-body">
                    <h5 class="card-title">Para Desenvolver</h5>
                    <p class="card-text">
                        Facilite o seu trabalho, tenha centenas de designs pré estabelecidos prontos para serem personaliazados de acordo com o seu projeto.
                    </p>
                    <a href="./pages/para-devs/devs.html" class="btn">Quero Desenvolver</a>
                </div>
            </div>
            
            <div class="card mb-1">
                <div class="card-body">
                    <h5 class="card-title">Para Freelancers</h5>
                    <p class="card-text">
                        Em meio a todas as opções de assets disponíveis, você pode incluir o seu projeto. Distribua assets a cobre por eles!
                    </p>
                    <a href="./" class="btn">Quero Distribuir</a>
                </div>
            </div>
     
            </article>

        </article>
        </section>

        `
        $(document).on('click', '.signIn', function(){
            $('body').prepend(signContent)
            $('input[name="email"]').focus()
        })

        $(document).on('click', '.signUp', function(){
            $('body').prepend(singUpContent)
        })

        $(document).on('click', '#close-sign-modal', function(){
            $('.sign-modal').remove()
        })
    }
}

new LetItHappen()