# `notificationsManagedNotificationAdditionalChannelAssociation` Submodule <a name="`notificationsManagedNotificationAdditionalChannelAssociation` Submodule" id="@cdktn/provider-aws.notificationsManagedNotificationAdditionalChannelAssociation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NotificationsManagedNotificationAdditionalChannelAssociation <a name="NotificationsManagedNotificationAdditionalChannelAssociation" id="@cdktn/provider-aws.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/notifications_managed_notification_additional_channel_association aws_notifications_managed_notification_additional_channel_association}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociation.Initializer"></a>

```typescript
import { notificationsManagedNotificationAdditionalChannelAssociation } from '@cdktn/provider-aws'

new notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociation(scope: Construct, id: string, config: NotificationsManagedNotificationAdditionalChannelAssociationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociation.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociation.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociation.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-aws.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociationConfig">NotificationsManagedNotificationAdditionalChannelAssociationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociation.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociation.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-aws.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociation.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociationConfig">NotificationsManagedNotificationAdditionalChannelAssociationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociation.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociation.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociation.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociation.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociation.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociation.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociation.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociation.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociation.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociation.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociation.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociation.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociation.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociation.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociation.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociation.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociation.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociation.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociation.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociation.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociation.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociation.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociation.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociation.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktn/provider-aws.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociation.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociation.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociation.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-aws.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociation.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-aws.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociation.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-aws.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociation.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-aws.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociation.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-aws.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociation.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-aws.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociation.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociation.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociation.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociation.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociation.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociation.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociation.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociation.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociation.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociation.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-aws.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociation.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-aws.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociation.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociation.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociation.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociation.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-aws.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociation.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociation.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-aws.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociation.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociation.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociation.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-aws.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociation.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociation.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociation.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociation.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociation.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociation.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a NotificationsManagedNotificationAdditionalChannelAssociation resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-aws.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociation.isConstruct"></a>

```typescript
import { notificationsManagedNotificationAdditionalChannelAssociation } from '@cdktn/provider-aws'

notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociation.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociation.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-aws.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociation.isTerraformElement"></a>

```typescript
import { notificationsManagedNotificationAdditionalChannelAssociation } from '@cdktn/provider-aws'

notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociation.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociation.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-aws.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociation.isTerraformResource"></a>

```typescript
import { notificationsManagedNotificationAdditionalChannelAssociation } from '@cdktn/provider-aws'

notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociation.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociation.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-aws.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociation.generateConfigForImport"></a>

```typescript
import { notificationsManagedNotificationAdditionalChannelAssociation } from '@cdktn/provider-aws'

notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociation.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a NotificationsManagedNotificationAdditionalChannelAssociation resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociation.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociation.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the NotificationsManagedNotificationAdditionalChannelAssociation to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing NotificationsManagedNotificationAdditionalChannelAssociation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/notifications_managed_notification_additional_channel_association#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociation.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the NotificationsManagedNotificationAdditionalChannelAssociation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociation.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociation.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociation.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociation.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociation.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociation.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociation.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociation.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociation.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociation.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociation.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociation.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociation.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociation.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociation.property.channelArnInput">channelArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociation.property.managedNotificationArnInput">managedNotificationArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociation.property.channelArn">channelArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociation.property.managedNotificationArn">managedNotificationArn</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociation.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-aws.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociation.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociation.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-aws.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociation.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-aws.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociation.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-aws.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociation.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-aws.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociation.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociation.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociation.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociation.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociation.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociation.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociation.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociation.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `channelArnInput`<sup>Optional</sup> <a name="channelArnInput" id="@cdktn/provider-aws.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociation.property.channelArnInput"></a>

```typescript
public readonly channelArnInput: string;
```

- *Type:* string

---

##### `managedNotificationArnInput`<sup>Optional</sup> <a name="managedNotificationArnInput" id="@cdktn/provider-aws.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociation.property.managedNotificationArnInput"></a>

```typescript
public readonly managedNotificationArnInput: string;
```

- *Type:* string

---

##### `channelArn`<sup>Required</sup> <a name="channelArn" id="@cdktn/provider-aws.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociation.property.channelArn"></a>

```typescript
public readonly channelArn: string;
```

- *Type:* string

---

##### `managedNotificationArn`<sup>Required</sup> <a name="managedNotificationArn" id="@cdktn/provider-aws.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociation.property.managedNotificationArn"></a>

```typescript
public readonly managedNotificationArn: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociation.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociation.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### NotificationsManagedNotificationAdditionalChannelAssociationConfig <a name="NotificationsManagedNotificationAdditionalChannelAssociationConfig" id="@cdktn/provider-aws.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociationConfig.Initializer"></a>

```typescript
import { notificationsManagedNotificationAdditionalChannelAssociation } from '@cdktn/provider-aws'

const notificationsManagedNotificationAdditionalChannelAssociationConfig: notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociationConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociationConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociationConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociationConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociationConfig.property.channelArn">channelArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/notifications_managed_notification_additional_channel_association#channel_arn NotificationsManagedNotificationAdditionalChannelAssociation#channel_arn}. |
| <code><a href="#@cdktn/provider-aws.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociationConfig.property.managedNotificationArn">managedNotificationArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/notifications_managed_notification_additional_channel_association#managed_notification_arn NotificationsManagedNotificationAdditionalChannelAssociation#managed_notification_arn}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `channelArn`<sup>Required</sup> <a name="channelArn" id="@cdktn/provider-aws.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociationConfig.property.channelArn"></a>

```typescript
public readonly channelArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/notifications_managed_notification_additional_channel_association#channel_arn NotificationsManagedNotificationAdditionalChannelAssociation#channel_arn}.

---

##### `managedNotificationArn`<sup>Required</sup> <a name="managedNotificationArn" id="@cdktn/provider-aws.notificationsManagedNotificationAdditionalChannelAssociation.NotificationsManagedNotificationAdditionalChannelAssociationConfig.property.managedNotificationArn"></a>

```typescript
public readonly managedNotificationArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/notifications_managed_notification_additional_channel_association#managed_notification_arn NotificationsManagedNotificationAdditionalChannelAssociation#managed_notification_arn}.

---



