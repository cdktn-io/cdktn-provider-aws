# `pinpointsmsvoicev2SenderId` Submodule <a name="`pinpointsmsvoicev2SenderId` Submodule" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Pinpointsmsvoicev2SenderId <a name="Pinpointsmsvoicev2SenderId" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/pinpointsmsvoicev2_sender_id aws_pinpointsmsvoicev2_sender_id}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.Initializer"></a>

```typescript
import { pinpointsmsvoicev2SenderId } from '@cdktn/provider-aws'

new pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId(scope: Construct, id: string, config: Pinpointsmsvoicev2SenderIdConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderIdConfig">Pinpointsmsvoicev2SenderIdConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderIdConfig">Pinpointsmsvoicev2SenderIdConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.resetDeletionProtectionEnabled">resetDeletionProtectionEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.resetMessageTypes">resetMessageTypes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.putTimeouts"></a>

```typescript
public putTimeouts(value: Pinpointsmsvoicev2SenderIdTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderIdTimeouts">Pinpointsmsvoicev2SenderIdTimeouts</a>

---

##### `resetDeletionProtectionEnabled` <a name="resetDeletionProtectionEnabled" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.resetDeletionProtectionEnabled"></a>

```typescript
public resetDeletionProtectionEnabled(): void
```

##### `resetMessageTypes` <a name="resetMessageTypes" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.resetMessageTypes"></a>

```typescript
public resetMessageTypes(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.resetRegion"></a>

```typescript
public resetRegion(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a Pinpointsmsvoicev2SenderId resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.isConstruct"></a>

```typescript
import { pinpointsmsvoicev2SenderId } from '@cdktn/provider-aws'

pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.isTerraformElement"></a>

```typescript
import { pinpointsmsvoicev2SenderId } from '@cdktn/provider-aws'

pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.isTerraformResource"></a>

```typescript
import { pinpointsmsvoicev2SenderId } from '@cdktn/provider-aws'

pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.generateConfigForImport"></a>

```typescript
import { pinpointsmsvoicev2SenderId } from '@cdktn/provider-aws'

pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a Pinpointsmsvoicev2SenderId resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the Pinpointsmsvoicev2SenderId to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing Pinpointsmsvoicev2SenderId that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/pinpointsmsvoicev2_sender_id#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the Pinpointsmsvoicev2SenderId to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.property.monthlyLeasingPrice">monthlyLeasingPrice</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.property.registered">registered</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.property.registrationId">registrationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.property.tagsAll">tagsAll</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderIdTimeoutsOutputReference">Pinpointsmsvoicev2SenderIdTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.property.deletionProtectionEnabledInput">deletionProtectionEnabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.property.isoCountryCodeInput">isoCountryCodeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.property.messageTypesInput">messageTypesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.property.senderIdInput">senderIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderIdTimeouts">Pinpointsmsvoicev2SenderIdTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.property.deletionProtectionEnabled">deletionProtectionEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.property.isoCountryCode">isoCountryCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.property.messageTypes">messageTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.property.senderId">senderId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `monthlyLeasingPrice`<sup>Required</sup> <a name="monthlyLeasingPrice" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.property.monthlyLeasingPrice"></a>

```typescript
public readonly monthlyLeasingPrice: string;
```

- *Type:* string

---

##### `registered`<sup>Required</sup> <a name="registered" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.property.registered"></a>

```typescript
public readonly registered: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `registrationId`<sup>Required</sup> <a name="registrationId" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.property.registrationId"></a>

```typescript
public readonly registrationId: string;
```

- *Type:* string

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.property.tagsAll"></a>

```typescript
public readonly tagsAll: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.property.timeouts"></a>

```typescript
public readonly timeouts: Pinpointsmsvoicev2SenderIdTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderIdTimeoutsOutputReference">Pinpointsmsvoicev2SenderIdTimeoutsOutputReference</a>

---

##### `deletionProtectionEnabledInput`<sup>Optional</sup> <a name="deletionProtectionEnabledInput" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.property.deletionProtectionEnabledInput"></a>

```typescript
public readonly deletionProtectionEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `isoCountryCodeInput`<sup>Optional</sup> <a name="isoCountryCodeInput" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.property.isoCountryCodeInput"></a>

```typescript
public readonly isoCountryCodeInput: string;
```

- *Type:* string

---

##### `messageTypesInput`<sup>Optional</sup> <a name="messageTypesInput" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.property.messageTypesInput"></a>

```typescript
public readonly messageTypesInput: string[];
```

- *Type:* string[]

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `senderIdInput`<sup>Optional</sup> <a name="senderIdInput" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.property.senderIdInput"></a>

```typescript
public readonly senderIdInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | Pinpointsmsvoicev2SenderIdTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderIdTimeouts">Pinpointsmsvoicev2SenderIdTimeouts</a>

---

##### `deletionProtectionEnabled`<sup>Required</sup> <a name="deletionProtectionEnabled" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.property.deletionProtectionEnabled"></a>

```typescript
public readonly deletionProtectionEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `isoCountryCode`<sup>Required</sup> <a name="isoCountryCode" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.property.isoCountryCode"></a>

```typescript
public readonly isoCountryCode: string;
```

- *Type:* string

---

##### `messageTypes`<sup>Required</sup> <a name="messageTypes" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.property.messageTypes"></a>

```typescript
public readonly messageTypes: string[];
```

- *Type:* string[]

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `senderId`<sup>Required</sup> <a name="senderId" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.property.senderId"></a>

```typescript
public readonly senderId: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderId.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### Pinpointsmsvoicev2SenderIdConfig <a name="Pinpointsmsvoicev2SenderIdConfig" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderIdConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderIdConfig.Initializer"></a>

```typescript
import { pinpointsmsvoicev2SenderId } from '@cdktn/provider-aws'

const pinpointsmsvoicev2SenderIdConfig: pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderIdConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderIdConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderIdConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderIdConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderIdConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderIdConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderIdConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderIdConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderIdConfig.property.isoCountryCode">isoCountryCode</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/pinpointsmsvoicev2_sender_id#iso_country_code Pinpointsmsvoicev2SenderId#iso_country_code}. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderIdConfig.property.senderId">senderId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/pinpointsmsvoicev2_sender_id#sender_id Pinpointsmsvoicev2SenderId#sender_id}. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderIdConfig.property.deletionProtectionEnabled">deletionProtectionEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/pinpointsmsvoicev2_sender_id#deletion_protection_enabled Pinpointsmsvoicev2SenderId#deletion_protection_enabled}. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderIdConfig.property.messageTypes">messageTypes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/pinpointsmsvoicev2_sender_id#message_types Pinpointsmsvoicev2SenderId#message_types}. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderIdConfig.property.region">region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderIdConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/pinpointsmsvoicev2_sender_id#tags Pinpointsmsvoicev2SenderId#tags}. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderIdConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderIdTimeouts">Pinpointsmsvoicev2SenderIdTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderIdConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderIdConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderIdConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderIdConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderIdConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderIdConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderIdConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `isoCountryCode`<sup>Required</sup> <a name="isoCountryCode" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderIdConfig.property.isoCountryCode"></a>

```typescript
public readonly isoCountryCode: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/pinpointsmsvoicev2_sender_id#iso_country_code Pinpointsmsvoicev2SenderId#iso_country_code}.

---

##### `senderId`<sup>Required</sup> <a name="senderId" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderIdConfig.property.senderId"></a>

```typescript
public readonly senderId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/pinpointsmsvoicev2_sender_id#sender_id Pinpointsmsvoicev2SenderId#sender_id}.

---

##### `deletionProtectionEnabled`<sup>Optional</sup> <a name="deletionProtectionEnabled" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderIdConfig.property.deletionProtectionEnabled"></a>

```typescript
public readonly deletionProtectionEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/pinpointsmsvoicev2_sender_id#deletion_protection_enabled Pinpointsmsvoicev2SenderId#deletion_protection_enabled}.

---

##### `messageTypes`<sup>Optional</sup> <a name="messageTypes" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderIdConfig.property.messageTypes"></a>

```typescript
public readonly messageTypes: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/pinpointsmsvoicev2_sender_id#message_types Pinpointsmsvoicev2SenderId#message_types}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderIdConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/pinpointsmsvoicev2_sender_id#region Pinpointsmsvoicev2SenderId#region}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderIdConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/pinpointsmsvoicev2_sender_id#tags Pinpointsmsvoicev2SenderId#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderIdConfig.property.timeouts"></a>

```typescript
public readonly timeouts: Pinpointsmsvoicev2SenderIdTimeouts;
```

- *Type:* <a href="#@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderIdTimeouts">Pinpointsmsvoicev2SenderIdTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/pinpointsmsvoicev2_sender_id#timeouts Pinpointsmsvoicev2SenderId#timeouts}

---

### Pinpointsmsvoicev2SenderIdTimeouts <a name="Pinpointsmsvoicev2SenderIdTimeouts" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderIdTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderIdTimeouts.Initializer"></a>

```typescript
import { pinpointsmsvoicev2SenderId } from '@cdktn/provider-aws'

const pinpointsmsvoicev2SenderIdTimeouts: pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderIdTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderIdTimeouts.property.create">create</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderIdTimeouts.property.delete">delete</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderIdTimeouts.property.update">update</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderIdTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/pinpointsmsvoicev2_sender_id#create Pinpointsmsvoicev2SenderId#create}

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderIdTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/pinpointsmsvoicev2_sender_id#delete Pinpointsmsvoicev2SenderId#delete}

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderIdTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.61.0/docs/resources/pinpointsmsvoicev2_sender_id#update Pinpointsmsvoicev2SenderId#update}

---

## Classes <a name="Classes" id="Classes"></a>

### Pinpointsmsvoicev2SenderIdTimeoutsOutputReference <a name="Pinpointsmsvoicev2SenderIdTimeoutsOutputReference" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderIdTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderIdTimeoutsOutputReference.Initializer"></a>

```typescript
import { pinpointsmsvoicev2SenderId } from '@cdktn/provider-aws'

new pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderIdTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderIdTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderIdTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderIdTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderIdTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderIdTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderIdTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderIdTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderIdTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderIdTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderIdTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderIdTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderIdTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderIdTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderIdTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderIdTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderIdTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderIdTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderIdTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderIdTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderIdTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderIdTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderIdTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderIdTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderIdTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderIdTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderIdTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderIdTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderIdTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderIdTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderIdTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderIdTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderIdTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderIdTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderIdTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderIdTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderIdTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderIdTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderIdTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderIdTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderIdTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderIdTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderIdTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderIdTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderIdTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderIdTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderIdTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderIdTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderIdTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderIdTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderIdTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderIdTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderIdTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderIdTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderIdTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderIdTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderIdTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderIdTimeouts">Pinpointsmsvoicev2SenderIdTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderIdTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderIdTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderIdTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderIdTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderIdTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderIdTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderIdTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderIdTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderIdTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Pinpointsmsvoicev2SenderIdTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.pinpointsmsvoicev2SenderId.Pinpointsmsvoicev2SenderIdTimeouts">Pinpointsmsvoicev2SenderIdTimeouts</a>

---



