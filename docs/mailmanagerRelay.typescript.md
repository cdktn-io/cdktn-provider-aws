# `mailmanagerRelay` Submodule <a name="`mailmanagerRelay` Submodule" id="@cdktn/provider-aws.mailmanagerRelay"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MailmanagerRelay <a name="MailmanagerRelay" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelay"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mailmanager_relay aws_mailmanager_relay}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelay.Initializer"></a>

```typescript
import { mailmanagerRelay } from '@cdktn/provider-aws'

new mailmanagerRelay.MailmanagerRelay(scope: Construct, id: string, config: MailmanagerRelayConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelay.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelay.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelay.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayConfig">MailmanagerRelayConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelay.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelay.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelay.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayConfig">MailmanagerRelayConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelay.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelay.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelay.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelay.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelay.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelay.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelay.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelay.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelay.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelay.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelay.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelay.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelay.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelay.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelay.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelay.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelay.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelay.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelay.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelay.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelay.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelay.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelay.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelay.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelay.putAuthentication">putAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelay.resetAuthentication">resetAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelay.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelay.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelay.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelay.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelay.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelay.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelay.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelay.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelay.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelay.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelay.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelay.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelay.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelay.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelay.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelay.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelay.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelay.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelay.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelay.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelay.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelay.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelay.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelay.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelay.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelay.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelay.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelay.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelay.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelay.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelay.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelay.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelay.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelay.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelay.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelay.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelay.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelay.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelay.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelay.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelay.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelay.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelay.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelay.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelay.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelay.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelay.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAuthentication` <a name="putAuthentication" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelay.putAuthentication"></a>

```typescript
public putAuthentication(value: IResolvable | MailmanagerRelayAuthentication[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelay.putAuthentication.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayAuthentication">MailmanagerRelayAuthentication</a>[]

---

##### `resetAuthentication` <a name="resetAuthentication" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelay.resetAuthentication"></a>

```typescript
public resetAuthentication(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelay.resetRegion"></a>

```typescript
public resetRegion(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelay.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelay.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelay.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelay.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelay.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a MailmanagerRelay resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelay.isConstruct"></a>

```typescript
import { mailmanagerRelay } from '@cdktn/provider-aws'

mailmanagerRelay.MailmanagerRelay.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelay.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelay.isTerraformElement"></a>

```typescript
import { mailmanagerRelay } from '@cdktn/provider-aws'

mailmanagerRelay.MailmanagerRelay.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelay.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelay.isTerraformResource"></a>

```typescript
import { mailmanagerRelay } from '@cdktn/provider-aws'

mailmanagerRelay.MailmanagerRelay.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelay.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelay.generateConfigForImport"></a>

```typescript
import { mailmanagerRelay } from '@cdktn/provider-aws'

mailmanagerRelay.MailmanagerRelay.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a MailmanagerRelay resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelay.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelay.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the MailmanagerRelay to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelay.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing MailmanagerRelay that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mailmanager_relay#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelay.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the MailmanagerRelay to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelay.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelay.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelay.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelay.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelay.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelay.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelay.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelay.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelay.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelay.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelay.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelay.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelay.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelay.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelay.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelay.property.authentication">authentication</a></code> | <code><a href="#@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayAuthenticationList">MailmanagerRelayAuthenticationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelay.property.createdTimestamp">createdTimestamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelay.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelay.property.lastModifiedTimestamp">lastModifiedTimestamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelay.property.tagsAll">tagsAll</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelay.property.authenticationInput">authenticationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayAuthentication">MailmanagerRelayAuthentication</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelay.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelay.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelay.property.serverNameInput">serverNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelay.property.serverPortInput">serverPortInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelay.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelay.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelay.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelay.property.serverName">serverName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelay.property.serverPort">serverPort</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelay.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelay.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelay.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelay.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelay.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelay.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelay.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelay.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelay.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelay.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelay.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelay.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelay.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelay.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelay.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelay.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `authentication`<sup>Required</sup> <a name="authentication" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelay.property.authentication"></a>

```typescript
public readonly authentication: MailmanagerRelayAuthenticationList;
```

- *Type:* <a href="#@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayAuthenticationList">MailmanagerRelayAuthenticationList</a>

---

##### `createdTimestamp`<sup>Required</sup> <a name="createdTimestamp" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelay.property.createdTimestamp"></a>

```typescript
public readonly createdTimestamp: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelay.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `lastModifiedTimestamp`<sup>Required</sup> <a name="lastModifiedTimestamp" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelay.property.lastModifiedTimestamp"></a>

```typescript
public readonly lastModifiedTimestamp: string;
```

- *Type:* string

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelay.property.tagsAll"></a>

```typescript
public readonly tagsAll: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `authenticationInput`<sup>Optional</sup> <a name="authenticationInput" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelay.property.authenticationInput"></a>

```typescript
public readonly authenticationInput: IResolvable | MailmanagerRelayAuthentication[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayAuthentication">MailmanagerRelayAuthentication</a>[]

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelay.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelay.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `serverNameInput`<sup>Optional</sup> <a name="serverNameInput" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelay.property.serverNameInput"></a>

```typescript
public readonly serverNameInput: string;
```

- *Type:* string

---

##### `serverPortInput`<sup>Optional</sup> <a name="serverPortInput" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelay.property.serverPortInput"></a>

```typescript
public readonly serverPortInput: number;
```

- *Type:* number

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelay.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelay.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelay.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `serverName`<sup>Required</sup> <a name="serverName" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelay.property.serverName"></a>

```typescript
public readonly serverName: string;
```

- *Type:* string

---

##### `serverPort`<sup>Required</sup> <a name="serverPort" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelay.property.serverPort"></a>

```typescript
public readonly serverPort: number;
```

- *Type:* number

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelay.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelay.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelay.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### MailmanagerRelayAuthentication <a name="MailmanagerRelayAuthentication" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayAuthentication"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayAuthentication.Initializer"></a>

```typescript
import { mailmanagerRelay } from '@cdktn/provider-aws'

const mailmanagerRelayAuthentication: mailmanagerRelay.MailmanagerRelayAuthentication = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayAuthentication.property.noAuthentication">noAuthentication</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayAuthenticationNoAuthentication">MailmanagerRelayAuthenticationNoAuthentication</a>[]</code> | no_authentication block. |
| <code><a href="#@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayAuthentication.property.secretArn">secretArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mailmanager_relay#secret_arn MailmanagerRelay#secret_arn}. |

---

##### `noAuthentication`<sup>Optional</sup> <a name="noAuthentication" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayAuthentication.property.noAuthentication"></a>

```typescript
public readonly noAuthentication: IResolvable | MailmanagerRelayAuthenticationNoAuthentication[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayAuthenticationNoAuthentication">MailmanagerRelayAuthenticationNoAuthentication</a>[]

no_authentication block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mailmanager_relay#no_authentication MailmanagerRelay#no_authentication}

---

##### `secretArn`<sup>Optional</sup> <a name="secretArn" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayAuthentication.property.secretArn"></a>

```typescript
public readonly secretArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mailmanager_relay#secret_arn MailmanagerRelay#secret_arn}.

---

### MailmanagerRelayAuthenticationNoAuthentication <a name="MailmanagerRelayAuthenticationNoAuthentication" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayAuthenticationNoAuthentication"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayAuthenticationNoAuthentication.Initializer"></a>

```typescript
import { mailmanagerRelay } from '@cdktn/provider-aws'

const mailmanagerRelayAuthenticationNoAuthentication: mailmanagerRelay.MailmanagerRelayAuthenticationNoAuthentication = { ... }
```


### MailmanagerRelayConfig <a name="MailmanagerRelayConfig" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayConfig.Initializer"></a>

```typescript
import { mailmanagerRelay } from '@cdktn/provider-aws'

const mailmanagerRelayConfig: mailmanagerRelay.MailmanagerRelayConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mailmanager_relay#name MailmanagerRelay#name}. |
| <code><a href="#@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayConfig.property.serverName">serverName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mailmanager_relay#server_name MailmanagerRelay#server_name}. |
| <code><a href="#@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayConfig.property.serverPort">serverPort</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mailmanager_relay#server_port MailmanagerRelay#server_port}. |
| <code><a href="#@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayConfig.property.authentication">authentication</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayAuthentication">MailmanagerRelayAuthentication</a>[]</code> | authentication block. |
| <code><a href="#@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayConfig.property.region">region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mailmanager_relay#tags MailmanagerRelay#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mailmanager_relay#name MailmanagerRelay#name}.

---

##### `serverName`<sup>Required</sup> <a name="serverName" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayConfig.property.serverName"></a>

```typescript
public readonly serverName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mailmanager_relay#server_name MailmanagerRelay#server_name}.

---

##### `serverPort`<sup>Required</sup> <a name="serverPort" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayConfig.property.serverPort"></a>

```typescript
public readonly serverPort: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mailmanager_relay#server_port MailmanagerRelay#server_port}.

---

##### `authentication`<sup>Optional</sup> <a name="authentication" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayConfig.property.authentication"></a>

```typescript
public readonly authentication: IResolvable | MailmanagerRelayAuthentication[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayAuthentication">MailmanagerRelayAuthentication</a>[]

authentication block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mailmanager_relay#authentication MailmanagerRelay#authentication}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mailmanager_relay#region MailmanagerRelay#region}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.62.0/docs/resources/mailmanager_relay#tags MailmanagerRelay#tags}.

---

## Classes <a name="Classes" id="Classes"></a>

### MailmanagerRelayAuthenticationList <a name="MailmanagerRelayAuthenticationList" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayAuthenticationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayAuthenticationList.Initializer"></a>

```typescript
import { mailmanagerRelay } from '@cdktn/provider-aws'

new mailmanagerRelay.MailmanagerRelayAuthenticationList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayAuthenticationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayAuthenticationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayAuthenticationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayAuthenticationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayAuthenticationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayAuthenticationList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayAuthenticationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayAuthenticationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayAuthenticationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayAuthenticationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayAuthenticationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayAuthenticationList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayAuthenticationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayAuthenticationList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayAuthenticationList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayAuthenticationList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayAuthenticationList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayAuthenticationList.get"></a>

```typescript
public get(index: number): MailmanagerRelayAuthenticationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayAuthenticationList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayAuthenticationList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayAuthenticationList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayAuthenticationList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayAuthentication">MailmanagerRelayAuthentication</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayAuthenticationList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayAuthenticationList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayAuthenticationList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MailmanagerRelayAuthentication[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayAuthentication">MailmanagerRelayAuthentication</a>[]

---


### MailmanagerRelayAuthenticationNoAuthenticationList <a name="MailmanagerRelayAuthenticationNoAuthenticationList" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayAuthenticationNoAuthenticationList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayAuthenticationNoAuthenticationList.Initializer"></a>

```typescript
import { mailmanagerRelay } from '@cdktn/provider-aws'

new mailmanagerRelay.MailmanagerRelayAuthenticationNoAuthenticationList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayAuthenticationNoAuthenticationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayAuthenticationNoAuthenticationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayAuthenticationNoAuthenticationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayAuthenticationNoAuthenticationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayAuthenticationNoAuthenticationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayAuthenticationNoAuthenticationList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayAuthenticationNoAuthenticationList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayAuthenticationNoAuthenticationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayAuthenticationNoAuthenticationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayAuthenticationNoAuthenticationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayAuthenticationNoAuthenticationList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayAuthenticationNoAuthenticationList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayAuthenticationNoAuthenticationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayAuthenticationNoAuthenticationList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayAuthenticationNoAuthenticationList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayAuthenticationNoAuthenticationList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayAuthenticationNoAuthenticationList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayAuthenticationNoAuthenticationList.get"></a>

```typescript
public get(index: number): MailmanagerRelayAuthenticationNoAuthenticationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayAuthenticationNoAuthenticationList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayAuthenticationNoAuthenticationList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayAuthenticationNoAuthenticationList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayAuthenticationNoAuthenticationList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayAuthenticationNoAuthentication">MailmanagerRelayAuthenticationNoAuthentication</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayAuthenticationNoAuthenticationList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayAuthenticationNoAuthenticationList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayAuthenticationNoAuthenticationList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MailmanagerRelayAuthenticationNoAuthentication[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayAuthenticationNoAuthentication">MailmanagerRelayAuthenticationNoAuthentication</a>[]

---


### MailmanagerRelayAuthenticationNoAuthenticationOutputReference <a name="MailmanagerRelayAuthenticationNoAuthenticationOutputReference" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayAuthenticationNoAuthenticationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayAuthenticationNoAuthenticationOutputReference.Initializer"></a>

```typescript
import { mailmanagerRelay } from '@cdktn/provider-aws'

new mailmanagerRelay.MailmanagerRelayAuthenticationNoAuthenticationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayAuthenticationNoAuthenticationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayAuthenticationNoAuthenticationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayAuthenticationNoAuthenticationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayAuthenticationNoAuthenticationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayAuthenticationNoAuthenticationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayAuthenticationNoAuthenticationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayAuthenticationNoAuthenticationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayAuthenticationNoAuthenticationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayAuthenticationNoAuthenticationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayAuthenticationNoAuthenticationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayAuthenticationNoAuthenticationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayAuthenticationNoAuthenticationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayAuthenticationNoAuthenticationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayAuthenticationNoAuthenticationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayAuthenticationNoAuthenticationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayAuthenticationNoAuthenticationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayAuthenticationNoAuthenticationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayAuthenticationNoAuthenticationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayAuthenticationNoAuthenticationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayAuthenticationNoAuthenticationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayAuthenticationNoAuthenticationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayAuthenticationNoAuthenticationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayAuthenticationNoAuthenticationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayAuthenticationNoAuthenticationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayAuthenticationNoAuthenticationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayAuthenticationNoAuthenticationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayAuthenticationNoAuthenticationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayAuthenticationNoAuthenticationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayAuthenticationNoAuthenticationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayAuthenticationNoAuthenticationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayAuthenticationNoAuthenticationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayAuthenticationNoAuthenticationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayAuthenticationNoAuthenticationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayAuthenticationNoAuthenticationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayAuthenticationNoAuthenticationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayAuthenticationNoAuthenticationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayAuthenticationNoAuthenticationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayAuthenticationNoAuthenticationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayAuthenticationNoAuthenticationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayAuthenticationNoAuthenticationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayAuthenticationNoAuthenticationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayAuthenticationNoAuthenticationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayAuthenticationNoAuthenticationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayAuthenticationNoAuthenticationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayAuthenticationNoAuthenticationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayAuthenticationNoAuthenticationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayAuthenticationNoAuthenticationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayAuthenticationNoAuthenticationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayAuthenticationNoAuthentication">MailmanagerRelayAuthenticationNoAuthentication</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayAuthenticationNoAuthenticationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayAuthenticationNoAuthenticationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayAuthenticationNoAuthenticationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MailmanagerRelayAuthenticationNoAuthentication;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayAuthenticationNoAuthentication">MailmanagerRelayAuthenticationNoAuthentication</a>

---


### MailmanagerRelayAuthenticationOutputReference <a name="MailmanagerRelayAuthenticationOutputReference" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayAuthenticationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayAuthenticationOutputReference.Initializer"></a>

```typescript
import { mailmanagerRelay } from '@cdktn/provider-aws'

new mailmanagerRelay.MailmanagerRelayAuthenticationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayAuthenticationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayAuthenticationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayAuthenticationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayAuthenticationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayAuthenticationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayAuthenticationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayAuthenticationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayAuthenticationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayAuthenticationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayAuthenticationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayAuthenticationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayAuthenticationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayAuthenticationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayAuthenticationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayAuthenticationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayAuthenticationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayAuthenticationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayAuthenticationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayAuthenticationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayAuthenticationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayAuthenticationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayAuthenticationOutputReference.putNoAuthentication">putNoAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayAuthenticationOutputReference.resetNoAuthentication">resetNoAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayAuthenticationOutputReference.resetSecretArn">resetSecretArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayAuthenticationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayAuthenticationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayAuthenticationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayAuthenticationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayAuthenticationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayAuthenticationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayAuthenticationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayAuthenticationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayAuthenticationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayAuthenticationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayAuthenticationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayAuthenticationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayAuthenticationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayAuthenticationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayAuthenticationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayAuthenticationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayAuthenticationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayAuthenticationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayAuthenticationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayAuthenticationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayAuthenticationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayAuthenticationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayAuthenticationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayAuthenticationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putNoAuthentication` <a name="putNoAuthentication" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayAuthenticationOutputReference.putNoAuthentication"></a>

```typescript
public putNoAuthentication(value: IResolvable | MailmanagerRelayAuthenticationNoAuthentication[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayAuthenticationOutputReference.putNoAuthentication.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayAuthenticationNoAuthentication">MailmanagerRelayAuthenticationNoAuthentication</a>[]

---

##### `resetNoAuthentication` <a name="resetNoAuthentication" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayAuthenticationOutputReference.resetNoAuthentication"></a>

```typescript
public resetNoAuthentication(): void
```

##### `resetSecretArn` <a name="resetSecretArn" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayAuthenticationOutputReference.resetSecretArn"></a>

```typescript
public resetSecretArn(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayAuthenticationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayAuthenticationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayAuthenticationOutputReference.property.noAuthentication">noAuthentication</a></code> | <code><a href="#@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayAuthenticationNoAuthenticationList">MailmanagerRelayAuthenticationNoAuthenticationList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayAuthenticationOutputReference.property.noAuthenticationInput">noAuthenticationInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayAuthenticationNoAuthentication">MailmanagerRelayAuthenticationNoAuthentication</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayAuthenticationOutputReference.property.secretArnInput">secretArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayAuthenticationOutputReference.property.secretArn">secretArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayAuthenticationOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayAuthentication">MailmanagerRelayAuthentication</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayAuthenticationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayAuthenticationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `noAuthentication`<sup>Required</sup> <a name="noAuthentication" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayAuthenticationOutputReference.property.noAuthentication"></a>

```typescript
public readonly noAuthentication: MailmanagerRelayAuthenticationNoAuthenticationList;
```

- *Type:* <a href="#@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayAuthenticationNoAuthenticationList">MailmanagerRelayAuthenticationNoAuthenticationList</a>

---

##### `noAuthenticationInput`<sup>Optional</sup> <a name="noAuthenticationInput" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayAuthenticationOutputReference.property.noAuthenticationInput"></a>

```typescript
public readonly noAuthenticationInput: IResolvable | MailmanagerRelayAuthenticationNoAuthentication[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayAuthenticationNoAuthentication">MailmanagerRelayAuthenticationNoAuthentication</a>[]

---

##### `secretArnInput`<sup>Optional</sup> <a name="secretArnInput" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayAuthenticationOutputReference.property.secretArnInput"></a>

```typescript
public readonly secretArnInput: string;
```

- *Type:* string

---

##### `secretArn`<sup>Required</sup> <a name="secretArn" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayAuthenticationOutputReference.property.secretArn"></a>

```typescript
public readonly secretArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayAuthenticationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MailmanagerRelayAuthentication;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.mailmanagerRelay.MailmanagerRelayAuthentication">MailmanagerRelayAuthentication</a>

---



