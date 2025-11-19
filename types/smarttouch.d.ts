declare global {
	namespace React {
		namespace JSX {
			interface IntrinsicElements {
				'smarttouch-nexgen': SmartTouchNexGenAttributes;
			}

			/**
			 * Attributes for the smarttouch-nexgen web component
			 */
			interface SmartTouchNexGenAttributes {
				/** SmartTouch client ID (required) */
				client: string;
				/** Form ID (required if not using appointment) */
				form?: string;
				/** Appointment ID (required if not using form) */
				appointment?: string;
				/** Show placeholders instead of labels */
				placeholders?: boolean;
				/** Enable memory (localStorage) for form fields */
				memory?: 'true' | 'false';
				/** Hide ReCaptcha badge */
				recaptchabadge?: 'false';
				/** Convert multi-checkbox to single-checkbox (comma-separated field IDs) */
				singles?: string;
				/** Math test difficulty level */
				mathtest?: string;
				/** Post-processing function name */
				postprocess?: string;
				/** Form label */
				label?: string;
				/** Download file URL */
				download?: string;
				/** Redirect URL after submission */
				redirect?: string;
				/** Enable text updates */
				textupdates?: string;
				/** Disclaimer text */
				disclaimer?: string;
				/** Submit button text */
				submit?: string;
				/** Environment mode */
				mode?: 'PROD' | 'STAGING' | 'DEV';
				/** Webhook URL */
				webhook?: string;
				/** Enable webhook testing */
				webhooktest?: boolean;
				/** Builder identifier */
				builder?: string;
				/** Community identifier */
				community?: string;
				/** Floor plan identifier */
				floorplan?: string;
				/** Spec identifier */
				spec?: string;
				/** Primary color (hex) */
				primarycolor?: string;
				/** Accent color (hex) */
				accentcolor?: string;
				/** Conditional display rules */
				conditions?: string;
				/** Hidden fields (comma-separated field IDs) */
				hidden?: string;
				/** Visible fields (comma-separated field IDs) */
				visible?: string;
				/** Base64-encoded workflow configuration */
				workflow?: string;
				/** Callback function name for various events */
				callback?: string;
				onsubmit?: string;
				onsuccess?: string;
				onfail?: string;
				onchange?: string;
				onload?: string;
				onmessage?: string;
				/** Data attributes for callbacks */
				'data-onsubmit'?: string;
				'data-onsuccess'?: string;
				'data-onfail'?: string;
				'data-onchange'?: string;
				'data-onload'?: string;
				'data-onmessage'?: string;
				'data-hidden'?: string;
				'data-visible'?: string;
				/** Field span configurations */
				span1?: string;
				span2?: string;
				span3?: string;
				span4?: string;
				span5?: string;
				span6?: string;
				span7?: string;
				span8?: string;
				span9?: string;
				span10?: string;
				span11?: string;
				span12?: string;
				/** Mobile span configurations */
				spanmobile1?: string;
				spanmobile2?: string;
				spanmobile3?: string;
				spanmobile4?: string;
				spanmobile5?: string;
				spanmobile6?: string;
				spanmobile7?: string;
				spanmobile8?: string;
				spanmobile9?: string;
				spanmobile10?: string;
				spanmobile11?: string;
				spanmobile12?: string;
				/** Dynamic field attributes (field1, field2, etc.) */
				[key: `field${number}`]: string;
				/** Field maxlength attributes */
				[key: `field${number}-maxlength`]: string;
				/** Field maxsize attributes */
				[key: `field${number}-maxsize`]: string;
				/** Numeric field shortcuts */
				[key: string]: any;
			}
		}
	}
}
export {};
