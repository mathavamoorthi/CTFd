from CTFd import create_app
from CTFd.models import Configs, db

app = create_app()

with app.app_context():
    theme_config = Configs.query.filter_by(key="ctf_theme").first()
    if theme_config:
        theme_config.value = "deep-space"
    else:
        theme_config = Configs(key="ctf_theme", value="deep-space")
        db.session.add(theme_config)
    
    db.session.commit()
    print("Theme set to 'deep-space' successfully.")
