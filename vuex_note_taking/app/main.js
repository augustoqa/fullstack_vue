// Application level data is the data that needs to be shared between components; 
// which is the state.
const state = {
	notes: [],
	timestamps: []
};

// mutations always have access to state as the first argument.
const mutations = {
	ADD_NOTE (state, payload) {
		let newNote = payload;
		state.notes.push(newNote);
	},
	ADD_TIMESTAMP (state, payload) {
		let newTimeStamp = payload;
		state.timestamps.push(newTimeStamp);
	}
};

// Actions are functions that exist to call mutations. In addition, actions can 
// perform asynchronous calls/logic handling before committing to mutations.
const actions = {
	// In actions, this object is regarded as the context object which allows us to 
	// access the state with context.state, access getters with context.getters, 
	// and call/commit to mutations with context.commit.
	addNote (context, payload) {
		// Using context.commit to call the mutations, we can update our actions object:
		context.commit('ADD_NOTE', payload);
	},
	addTimestamp (context, payload) {
		context.commit('ADD_TIMESTAMP', payload);
	}
};

// Getters are to an application store what computed properties are to a component. 
// Getters are used to derive computed information from store state. We can call 
// getters multiple times in our actions and in our components.
const getters = {
	getNotes: state => state.notes,
	getTimestamps: state => state.timestamps,
	getNoteCount: state => state.notes.length
};

const store = new Vuex.Store({
	state,
	mutations,
	actions,
	getters
})

const inputComponent = {
  template: `<input 
  	placeholder='Enter a note' 
  	v-model="input"
  	@keyup.enter="monitorEnterKey"
  	class="input is-small" type="text" />`,
  data () {
  	return {
  		input: '',
  	}
  },
  methods: {
  	monitorEnterKey () {
  		// Store actions are dispatched simply with store.dispatch('nameOfAction', payload).
  		this.$store.dispatch('addNote', this.input);
  		this.$store.dispatch('addTimestamp', new Date().toLocaleString());
  		this.input = '';
  	}
  }
}

const noteCountComponent = {
	template: 
		`<div class="note-count">
			Note count: <strong>{{ noteCount }}</strong>
		</div>`,
	computed: {
		noteCount() {
			return this.$store.getters.getNoteCount;
		}
	}
}

new Vue({
  el: '#app',
  store,
  computed: {
  	notes() {
  		return this.$store.getters.getNotes;
  	},
  	timestamps() {
  		return this.$store.getters.getTimestamps;
  	}
  },
  components: {
    'input-component': inputComponent,
    'note-count-component': noteCountComponent
  }
})
