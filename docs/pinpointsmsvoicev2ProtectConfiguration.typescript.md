# `pinpointsmsvoicev2ProtectConfiguration` Submodule <a name="`pinpointsmsvoicev2ProtectConfiguration` Submodule" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Pinpointsmsvoicev2ProtectConfiguration <a name="Pinpointsmsvoicev2ProtectConfiguration" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/pinpointsmsvoicev2_protect_configuration aws_pinpointsmsvoicev2_protect_configuration}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.Initializer"></a>

```typescript
import { pinpointsmsvoicev2ProtectConfiguration } from '@cdktn/provider-aws'

new pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration(scope: Construct, id: string, config?: Pinpointsmsvoicev2ProtectConfigurationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfigurationConfig">Pinpointsmsvoicev2ProtectConfigurationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfigurationConfig">Pinpointsmsvoicev2ProtectConfigurationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.resetDeletionProtectionEnabled">resetDeletionProtectionEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.resetMmsCountryRules">resetMmsCountryRules</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.resetRcsCountryRules">resetRcsCountryRules</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.resetSmsCountryRules">resetSmsCountryRules</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.resetVoiceCountryRules">resetVoiceCountryRules</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetDeletionProtectionEnabled` <a name="resetDeletionProtectionEnabled" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.resetDeletionProtectionEnabled"></a>

```typescript
public resetDeletionProtectionEnabled(): void
```

##### `resetMmsCountryRules` <a name="resetMmsCountryRules" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.resetMmsCountryRules"></a>

```typescript
public resetMmsCountryRules(): void
```

##### `resetRcsCountryRules` <a name="resetRcsCountryRules" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.resetRcsCountryRules"></a>

```typescript
public resetRcsCountryRules(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.resetRegion"></a>

```typescript
public resetRegion(): void
```

##### `resetSmsCountryRules` <a name="resetSmsCountryRules" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.resetSmsCountryRules"></a>

```typescript
public resetSmsCountryRules(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetVoiceCountryRules` <a name="resetVoiceCountryRules" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.resetVoiceCountryRules"></a>

```typescript
public resetVoiceCountryRules(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a Pinpointsmsvoicev2ProtectConfiguration resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.isConstruct"></a>

```typescript
import { pinpointsmsvoicev2ProtectConfiguration } from '@cdktn/provider-aws'

pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.isConstruct(x: any)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.isTerraformElement"></a>

```typescript
import { pinpointsmsvoicev2ProtectConfiguration } from '@cdktn/provider-aws'

pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.isTerraformResource"></a>

```typescript
import { pinpointsmsvoicev2ProtectConfiguration } from '@cdktn/provider-aws'

pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.generateConfigForImport"></a>

```typescript
import { pinpointsmsvoicev2ProtectConfiguration } from '@cdktn/provider-aws'

pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a Pinpointsmsvoicev2ProtectConfiguration resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the Pinpointsmsvoicev2ProtectConfiguration to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing Pinpointsmsvoicev2ProtectConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/pinpointsmsvoicev2_protect_configuration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the Pinpointsmsvoicev2ProtectConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.property.accountDefault">accountDefault</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.property.createdTimestamp">createdTimestamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.property.tagsAll">tagsAll</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.property.deletionProtectionEnabledInput">deletionProtectionEnabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.property.mmsCountryRulesInput">mmsCountryRulesInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.property.rcsCountryRulesInput">rcsCountryRulesInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.property.smsCountryRulesInput">smsCountryRulesInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.property.voiceCountryRulesInput">voiceCountryRulesInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.property.deletionProtectionEnabled">deletionProtectionEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.property.mmsCountryRules">mmsCountryRules</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.property.rcsCountryRules">rcsCountryRules</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.property.smsCountryRules">smsCountryRules</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.property.voiceCountryRules">voiceCountryRules</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `accountDefault`<sup>Required</sup> <a name="accountDefault" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.property.accountDefault"></a>

```typescript
public readonly accountDefault: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `createdTimestamp`<sup>Required</sup> <a name="createdTimestamp" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.property.createdTimestamp"></a>

```typescript
public readonly createdTimestamp: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.property.tagsAll"></a>

```typescript
public readonly tagsAll: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `deletionProtectionEnabledInput`<sup>Optional</sup> <a name="deletionProtectionEnabledInput" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.property.deletionProtectionEnabledInput"></a>

```typescript
public readonly deletionProtectionEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `mmsCountryRulesInput`<sup>Optional</sup> <a name="mmsCountryRulesInput" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.property.mmsCountryRulesInput"></a>

```typescript
public readonly mmsCountryRulesInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `rcsCountryRulesInput`<sup>Optional</sup> <a name="rcsCountryRulesInput" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.property.rcsCountryRulesInput"></a>

```typescript
public readonly rcsCountryRulesInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `smsCountryRulesInput`<sup>Optional</sup> <a name="smsCountryRulesInput" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.property.smsCountryRulesInput"></a>

```typescript
public readonly smsCountryRulesInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `voiceCountryRulesInput`<sup>Optional</sup> <a name="voiceCountryRulesInput" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.property.voiceCountryRulesInput"></a>

```typescript
public readonly voiceCountryRulesInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `deletionProtectionEnabled`<sup>Required</sup> <a name="deletionProtectionEnabled" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.property.deletionProtectionEnabled"></a>

```typescript
public readonly deletionProtectionEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `mmsCountryRules`<sup>Required</sup> <a name="mmsCountryRules" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.property.mmsCountryRules"></a>

```typescript
public readonly mmsCountryRules: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `rcsCountryRules`<sup>Required</sup> <a name="rcsCountryRules" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.property.rcsCountryRules"></a>

```typescript
public readonly rcsCountryRules: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `smsCountryRules`<sup>Required</sup> <a name="smsCountryRules" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.property.smsCountryRules"></a>

```typescript
public readonly smsCountryRules: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `voiceCountryRules`<sup>Required</sup> <a name="voiceCountryRules" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.property.voiceCountryRules"></a>

```typescript
public readonly voiceCountryRules: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfiguration.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### Pinpointsmsvoicev2ProtectConfigurationConfig <a name="Pinpointsmsvoicev2ProtectConfigurationConfig" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfigurationConfig.Initializer"></a>

```typescript
import { pinpointsmsvoicev2ProtectConfiguration } from '@cdktn/provider-aws'

const pinpointsmsvoicev2ProtectConfigurationConfig: pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfigurationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfigurationConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfigurationConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfigurationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfigurationConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfigurationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfigurationConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfigurationConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfigurationConfig.property.deletionProtectionEnabled">deletionProtectionEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/pinpointsmsvoicev2_protect_configuration#deletion_protection_enabled Pinpointsmsvoicev2ProtectConfiguration#deletion_protection_enabled}. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfigurationConfig.property.mmsCountryRules">mmsCountryRules</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/pinpointsmsvoicev2_protect_configuration#mms_country_rules Pinpointsmsvoicev2ProtectConfiguration#mms_country_rules}. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfigurationConfig.property.rcsCountryRules">rcsCountryRules</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/pinpointsmsvoicev2_protect_configuration#rcs_country_rules Pinpointsmsvoicev2ProtectConfiguration#rcs_country_rules}. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfigurationConfig.property.region">region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfigurationConfig.property.smsCountryRules">smsCountryRules</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/pinpointsmsvoicev2_protect_configuration#sms_country_rules Pinpointsmsvoicev2ProtectConfiguration#sms_country_rules}. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfigurationConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/pinpointsmsvoicev2_protect_configuration#tags Pinpointsmsvoicev2ProtectConfiguration#tags}. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfigurationConfig.property.voiceCountryRules">voiceCountryRules</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/pinpointsmsvoicev2_protect_configuration#voice_country_rules Pinpointsmsvoicev2ProtectConfiguration#voice_country_rules}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfigurationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfigurationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfigurationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfigurationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfigurationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfigurationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfigurationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `deletionProtectionEnabled`<sup>Optional</sup> <a name="deletionProtectionEnabled" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfigurationConfig.property.deletionProtectionEnabled"></a>

```typescript
public readonly deletionProtectionEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/pinpointsmsvoicev2_protect_configuration#deletion_protection_enabled Pinpointsmsvoicev2ProtectConfiguration#deletion_protection_enabled}.

---

##### `mmsCountryRules`<sup>Optional</sup> <a name="mmsCountryRules" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfigurationConfig.property.mmsCountryRules"></a>

```typescript
public readonly mmsCountryRules: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/pinpointsmsvoicev2_protect_configuration#mms_country_rules Pinpointsmsvoicev2ProtectConfiguration#mms_country_rules}.

---

##### `rcsCountryRules`<sup>Optional</sup> <a name="rcsCountryRules" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfigurationConfig.property.rcsCountryRules"></a>

```typescript
public readonly rcsCountryRules: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/pinpointsmsvoicev2_protect_configuration#rcs_country_rules Pinpointsmsvoicev2ProtectConfiguration#rcs_country_rules}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfigurationConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/pinpointsmsvoicev2_protect_configuration#region Pinpointsmsvoicev2ProtectConfiguration#region}

---

##### `smsCountryRules`<sup>Optional</sup> <a name="smsCountryRules" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfigurationConfig.property.smsCountryRules"></a>

```typescript
public readonly smsCountryRules: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/pinpointsmsvoicev2_protect_configuration#sms_country_rules Pinpointsmsvoicev2ProtectConfiguration#sms_country_rules}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfigurationConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/pinpointsmsvoicev2_protect_configuration#tags Pinpointsmsvoicev2ProtectConfiguration#tags}.

---

##### `voiceCountryRules`<sup>Optional</sup> <a name="voiceCountryRules" id="@cdktn/provider-aws.pinpointsmsvoicev2ProtectConfiguration.Pinpointsmsvoicev2ProtectConfigurationConfig.property.voiceCountryRules"></a>

```typescript
public readonly voiceCountryRules: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/pinpointsmsvoicev2_protect_configuration#voice_country_rules Pinpointsmsvoicev2ProtectConfiguration#voice_country_rules}.

---



