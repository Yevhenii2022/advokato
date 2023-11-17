import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import {
	ButtonStyled,
	Container,
	Email,
	ErrorsStyled,
	Input,
	InputWraper,
	LabelWraper,
	TitleStyled,
} from "./FeedBackForm.styled";
import { Icon } from "../Icon";

const schema = yup.object({
	name: yup
		.string()
		.required("Це поле є обов’язковим")
		.min(2, "Має бути мінімум 2 символи")
		.max(40, "Має бути не більше 40 символів"),
	tel: yup
		.string()
		.required("Номер телефону обов'язковий")
		.matches(
			/^\([0-9]{3}\) [0-9]{3}-[0-9]{2}-[0-9]{2}/,
			"Введіть телефон в наступному форматі (066) 777-30-77",
		)
		.max(15, "Забагато символів"),
	question: yup
		.string()
		.required("Це поле є обов’язковим")
		.min(8, "Має бути мінімум 8 символів")
		.max(700, "Має бути не більше 700 символів"),
});

export const FeedBackForm = () => {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors, isValid, isDirty },
	} = useForm({
		mode: "onChange",
		resolver: yupResolver(schema),
	});

	const onSubmit = data => {
		const trimmedData = {
			name: data.name.trim(),
			tel: data.tel,
			question: data.question.trim(),
		};

		alert(JSON.stringify(trimmedData));
		reset();
	};

	return (
		<section>
			<Container>
				<TitleStyled>Зв'яжіться з нами</TitleStyled>
				<Link
					to="mailto:acstatus.mk@gmail.com"
					aria-label="електронна пошта компанії"
				>
					<Email>acstatus.mk@gmail.com</Email>
				</Link>

				<form
					autoComplete="off"
					onSubmit={handleSubmit(onSubmit)}
				>
					<InputWraper>
						<LabelWraper>
							<label htmlFor="name">Ваше ім’я</label>
							<Input
								{...register("name")}
								type="text"
								id="name"
								placeholder="Введіть ім’я"
								valid={isValid}
								invalid={isDirty && !isValid}
							/>
							<ErrorsStyled>{errors.name?.message}</ErrorsStyled>
						</LabelWraper>

						<LabelWraper>
							<label htmlFor="tel">Ваш телефон</label>
							<Input
								{...register("tel")}
								type="tel"
								id="tel"
								placeholder="Введіть телефон"
								valid={isValid}
								invalid={isDirty && !isValid}
								checkMessage="This is valid email"
							/>

							{errors.tel && isDirty ? (
								<ErrorsStyled>{errors.tel?.message}</ErrorsStyled>
							) : isValid && isDirty ? (
								<ErrorsStyled color="#3cbc81">Це правильний формат телефона</ErrorsStyled>
							) : (
								""
							)}
						</LabelWraper>
					</InputWraper>

					<LabelWraper>
						<label htmlFor="question">Ваше питання</label>
						<Input
							{...register("question")}
							type="text"
							id="question"
							placeholder="Введіть питання"
							valid={isValid}
							invalid={isDirty && !isValid}
						/>
						<ErrorsStyled>{errors.question?.message}</ErrorsStyled>
					</LabelWraper>

					<ButtonStyled
						type="submit"
						disabled={!isValid || !isDirty}
						aria-label="Відправити данні форми"
					>
						Відправити
						<Icon
							id={"icon-arrow-right"}
							width={16}
							height={12}
						/>
					</ButtonStyled>
				</form>
			</Container>
		</section>
	);
};
