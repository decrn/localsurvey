# Spec

## Survey builder

### Command Area

Survey builder is an interactive page with a command area at the top where users can quickly return to the survey overview, undo (last edit), redo, and preview the survey they're working on.
In the right aligned part of the command area users can easily import existing form builder files (JSON or similar) or export the active survey.
The command area might be scroll locked to allow it to be at the top of the page at any point

### Category selector

Immediately below the command area, the user finds the page/category selector.
The user can quickly and easily define the various pages or categories the survey-taker will be presented with and in what order they will appear.
The categories will appear in a stepper format, similar to the way the survey-taker will be presented. The stepper will have an edit icon that opens a dialog where
the user can rename an existing category or delete it entirely (confirmation if the category has questions / is not empty). The elements in the stepper will also have a draggable icon to signify they can re-order them.
The final element of the stepper will be an "add category".
The user selects the currently active category, which updates the area below to show the questions in this category.

### Question builder

The main builder area itself should present the user with a live preview of the question they're working on (taking up 70 percent of the screen),
and the specifications pane to the right of it (taking up the remaining 30% of the screen) that contains all user editable properties of the active question:

* The question type:
    - range van 0 - X (rating)
    - 1 boolean
    - text (input type: number, email...)
    - multi options (max amount -> checkbox, radio)
* The question name/title/wording
* the unique question id (used in the survey results export) -> Can be *autogen'd* after user fills in the name
* the various options a survey taker can choose
* context aware options depending on the question type (autocomplete y/n for text input, color coding for ranges, validation, etc.)

### Miscellaneous

The question pane should be draggable, allowing the user to quickly and easily re-arrange the order of the questions appearing on the page.
The user can also drag the question onto the category stepper at the top to move it to a different category. (tooltip on draggable icon should mention this)

When the user collapses the question (indicating that the question is done being edited ), the question will automatically collapse to a closed state, which
shows the question name/title and the type. The draggable icon should remain visible to signify being able to re-order questions.
A notification message should appear at the bottom right, telling the user the changes were saved.