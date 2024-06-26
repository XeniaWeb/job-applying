<?php

namespace App\Enums;

enum ApplyStatus: string
{
    case DRAFT = 'draft';
    case SENT = 'sent';
    case INVITE = 'invite';
    case TECH_INTERVIEW = 'tech_interview';
    case PENDING = 'pending';
    case OFFER = 'offer';
    case REFUSAL = 'refusal';
    case CLOSED_NO_RESPONSE = 'closed_no_response';

    // extra helper to allow for greater customization of displayed values, without disclosing the name/value data directly
    public function label(): string
    {
        return match ($this) {
            self::DRAFT => 'Draft',
            self::SENT => 'Sent',
            self::INVITE => 'Invite for interview',
            self::TECH_INTERVIEW => 'Tech interview',
            self::PENDING => 'Pending',
            self::OFFER => 'Offer received',
            self::REFUSAL => 'Refusal received',
            self::CLOSED_NO_RESPONSE => 'Closed without response',
        };
    }

    // extra helper to allow for greater customization of displayed values, without disclosing the name/value data directly
    public function labelShort(): string
    {
        return match ($this) {
            self::DRAFT => 'Draft',
            self::SENT => 'Sent',
            self::INVITE => 'Invite',
            self::TECH_INTERVIEW => 'Tech',
            self::PENDING => 'Pending',
            self::OFFER => 'Offer',
            self::REFUSAL => 'Refusal',
            self::CLOSED_NO_RESPONSE => 'Closed',
        };
    }

    /**
     * Возвращает массив в формате ключ-значение.
     */
    public static function forSelect(): array
    {
        $items = [];
        foreach (self::cases() as $case) {
            $items[$case->value] = $case->label();
        }

        return $items;
    }

    /**
     * Возвращает массив в формате ключ-значение.
     */
    public static function forList(): array
    {
        $items = [];
        foreach (self::cases() as $case) {
            $items[$case->value] = $case->labelShort();
        }

        return $items;
    }
}
