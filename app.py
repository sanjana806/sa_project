from flask import Flask, render_template, url_for

app = Flask(__name__)

# --- Routes ---
@app.route('/')
def home():
    return render_template('home.html')

@app.route('/about')
# About Me Page
@app.route('/about-me')
def about_me():
    return render_template('about-me.html')

@app.route('/journey')
def journey():
    return render_template('journey.html')

@app.route("/feedback")
def feedback():
    return render_template('feedback.html')

@app.route('/codroidhub')
def codroidhub():
    return render_template('codroidhub.html')

@app.route('/blogs')
def blogs_page():
    return render_template('blogs.html')

@app.route('/projects')
def projects_page():
    return render_template('projects.html')

@app.route('/github')
def github():
    return render_template('github.html')

@app.route('/journey/problem-scoping')
def problem_scoping():
    return render_template('problem_scoping.html')

@app.route('/journey/problem-scoping/project1')
def problem_detail_project1():
    return render_template('problem_scoping_projects1.html')

@app.route('/journey/problem-scoping/project2')
def problem_detail_project2():
    return render_template('problem_scoping_projects2.html')

@app.route('/journey/problem-scoping/project3')
def problem_detail_project3():
    return render_template('problem_scoping_projects3.html')

@app.route('/journey/problem-scoping/project4')
def problem_detail_project4():
    return render_template('problem_scoping_projects4.html')

@app.route('/journey/data-acquisition')
def data_acquisition():
    return render_template('data_aquisition.html')

@app.route('/journey/data-exploration')
def data_exploration():
    return render_template('data_exploration.html')

@app.route('/journey/data-exploration/<project>')
def data_exploration_project(project):
    project_map = {
        "project1": "notebook1.html",
        "project2": "notebook2.html",
        "project3": "notebook3.html",
        "project4": "notebook4.html",
    }

    if project in project_map:
        return render_template('notebook.html', filename=project_map[project])
    else:
        return "Project not found", 404

@app.route('/journey/modeling')
def modeling():
    return render_template('modeling.html')

@app.route('/journey/deployment')
def deployment():
    return render_template('deployment.html')

@app.route('/teachableMachine/1')
def teachMachine1():
    return render_template("teachableMachine1.html")

if __name__ == '__main__':
    app.run(host = "0.0.0.0")


