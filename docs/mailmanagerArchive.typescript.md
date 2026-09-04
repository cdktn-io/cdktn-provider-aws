# `mailmanagerArchive` Submodule <a name="`mailmanagerArchive` Submodule" id="@cdktn/provider-aws.mailmanagerArchive"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MailmanagerArchive <a name="MailmanagerArchive" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchive"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/mailmanager_archive aws_mailmanager_archive}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchive.Initializer"></a>

```typescript
import { mailmanagerArchive } from '@cdktn/provider-aws'

new mailmanagerArchive.MailmanagerArchive(scope: Construct, id: string, config: MailmanagerArchiveConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchive.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchive.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchive.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveConfig">MailmanagerArchiveConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchive.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchive.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchive.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveConfig">MailmanagerArchiveConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchive.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchive.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchive.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchive.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchive.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchive.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchive.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchive.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchive.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchive.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchive.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchive.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchive.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchive.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchive.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchive.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchive.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchive.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchive.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchive.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchive.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchive.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchive.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchive.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchive.putRetention">putRetention</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchive.resetKmsKeyArn">resetKmsKeyArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchive.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchive.resetRetention">resetRetention</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchive.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchive.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchive.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchive.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchive.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchive.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchive.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchive.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchive.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchive.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchive.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchive.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchive.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchive.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchive.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchive.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchive.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchive.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchive.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchive.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchive.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchive.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchive.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchive.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchive.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchive.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchive.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchive.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchive.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchive.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchive.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchive.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchive.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchive.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchive.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchive.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchive.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchive.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchive.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchive.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchive.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchive.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchive.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchive.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchive.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchive.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putRetention` <a name="putRetention" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchive.putRetention"></a>

```typescript
public putRetention(value: IResolvable | MailmanagerArchiveRetention[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchive.putRetention.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveRetention">MailmanagerArchiveRetention</a>[]

---

##### `resetKmsKeyArn` <a name="resetKmsKeyArn" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchive.resetKmsKeyArn"></a>

```typescript
public resetKmsKeyArn(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchive.resetRegion"></a>

```typescript
public resetRegion(): void
```

##### `resetRetention` <a name="resetRetention" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchive.resetRetention"></a>

```typescript
public resetRetention(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchive.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchive.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchive.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchive.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchive.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a MailmanagerArchive resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchive.isConstruct"></a>

```typescript
import { mailmanagerArchive } from '@cdktn/provider-aws'

mailmanagerArchive.MailmanagerArchive.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchive.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchive.isTerraformElement"></a>

```typescript
import { mailmanagerArchive } from '@cdktn/provider-aws'

mailmanagerArchive.MailmanagerArchive.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchive.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchive.isTerraformResource"></a>

```typescript
import { mailmanagerArchive } from '@cdktn/provider-aws'

mailmanagerArchive.MailmanagerArchive.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchive.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchive.generateConfigForImport"></a>

```typescript
import { mailmanagerArchive } from '@cdktn/provider-aws'

mailmanagerArchive.MailmanagerArchive.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a MailmanagerArchive resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchive.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchive.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the MailmanagerArchive to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchive.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing MailmanagerArchive that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/mailmanager_archive#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchive.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the MailmanagerArchive to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchive.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchive.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchive.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchive.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchive.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchive.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchive.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchive.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchive.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchive.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchive.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchive.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchive.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchive.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchive.property.archiveState">archiveState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchive.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchive.property.createdTimestamp">createdTimestamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchive.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchive.property.lastUpdatedTimestamp">lastUpdatedTimestamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchive.property.retention">retention</a></code> | <code><a href="#@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveRetentionList">MailmanagerArchiveRetentionList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchive.property.retentionActual">retentionActual</a></code> | <code><a href="#@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveRetentionActualList">MailmanagerArchiveRetentionActualList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchive.property.tagsAll">tagsAll</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchive.property.kmsKeyArnInput">kmsKeyArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchive.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchive.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchive.property.retentionInput">retentionInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveRetention">MailmanagerArchiveRetention</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchive.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchive.property.kmsKeyArn">kmsKeyArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchive.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchive.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchive.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchive.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchive.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchive.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchive.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchive.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchive.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchive.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchive.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchive.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchive.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchive.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchive.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchive.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchive.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `archiveState`<sup>Required</sup> <a name="archiveState" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchive.property.archiveState"></a>

```typescript
public readonly archiveState: string;
```

- *Type:* string

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchive.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `createdTimestamp`<sup>Required</sup> <a name="createdTimestamp" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchive.property.createdTimestamp"></a>

```typescript
public readonly createdTimestamp: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchive.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `lastUpdatedTimestamp`<sup>Required</sup> <a name="lastUpdatedTimestamp" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchive.property.lastUpdatedTimestamp"></a>

```typescript
public readonly lastUpdatedTimestamp: string;
```

- *Type:* string

---

##### `retention`<sup>Required</sup> <a name="retention" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchive.property.retention"></a>

```typescript
public readonly retention: MailmanagerArchiveRetentionList;
```

- *Type:* <a href="#@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveRetentionList">MailmanagerArchiveRetentionList</a>

---

##### `retentionActual`<sup>Required</sup> <a name="retentionActual" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchive.property.retentionActual"></a>

```typescript
public readonly retentionActual: MailmanagerArchiveRetentionActualList;
```

- *Type:* <a href="#@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveRetentionActualList">MailmanagerArchiveRetentionActualList</a>

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchive.property.tagsAll"></a>

```typescript
public readonly tagsAll: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `kmsKeyArnInput`<sup>Optional</sup> <a name="kmsKeyArnInput" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchive.property.kmsKeyArnInput"></a>

```typescript
public readonly kmsKeyArnInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchive.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchive.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `retentionInput`<sup>Optional</sup> <a name="retentionInput" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchive.property.retentionInput"></a>

```typescript
public readonly retentionInput: IResolvable | MailmanagerArchiveRetention[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveRetention">MailmanagerArchiveRetention</a>[]

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchive.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `kmsKeyArn`<sup>Required</sup> <a name="kmsKeyArn" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchive.property.kmsKeyArn"></a>

```typescript
public readonly kmsKeyArn: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchive.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchive.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchive.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchive.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchive.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### MailmanagerArchiveConfig <a name="MailmanagerArchiveConfig" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveConfig.Initializer"></a>

```typescript
import { mailmanagerArchive } from '@cdktn/provider-aws'

const mailmanagerArchiveConfig: mailmanagerArchive.MailmanagerArchiveConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/mailmanager_archive#name MailmanagerArchive#name}. |
| <code><a href="#@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveConfig.property.kmsKeyArn">kmsKeyArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/mailmanager_archive#kms_key_arn MailmanagerArchive#kms_key_arn}. |
| <code><a href="#@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveConfig.property.region">region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveConfig.property.retention">retention</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveRetention">MailmanagerArchiveRetention</a>[]</code> | retention block. |
| <code><a href="#@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/mailmanager_archive#tags MailmanagerArchive#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/mailmanager_archive#name MailmanagerArchive#name}.

---

##### `kmsKeyArn`<sup>Optional</sup> <a name="kmsKeyArn" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveConfig.property.kmsKeyArn"></a>

```typescript
public readonly kmsKeyArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/mailmanager_archive#kms_key_arn MailmanagerArchive#kms_key_arn}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/mailmanager_archive#region MailmanagerArchive#region}

---

##### `retention`<sup>Optional</sup> <a name="retention" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveConfig.property.retention"></a>

```typescript
public readonly retention: IResolvable | MailmanagerArchiveRetention[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveRetention">MailmanagerArchiveRetention</a>[]

retention block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/mailmanager_archive#retention MailmanagerArchive#retention}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/mailmanager_archive#tags MailmanagerArchive#tags}.

---

### MailmanagerArchiveRetention <a name="MailmanagerArchiveRetention" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveRetention"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveRetention.Initializer"></a>

```typescript
import { mailmanagerArchive } from '@cdktn/provider-aws'

const mailmanagerArchiveRetention: mailmanagerArchive.MailmanagerArchiveRetention = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveRetention.property.retentionPeriod">retentionPeriod</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/mailmanager_archive#retention_period MailmanagerArchive#retention_period}. |

---

##### `retentionPeriod`<sup>Required</sup> <a name="retentionPeriod" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveRetention.property.retentionPeriod"></a>

```typescript
public readonly retentionPeriod: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/mailmanager_archive#retention_period MailmanagerArchive#retention_period}.

---

### MailmanagerArchiveRetentionActual <a name="MailmanagerArchiveRetentionActual" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveRetentionActual"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveRetentionActual.Initializer"></a>

```typescript
import { mailmanagerArchive } from '@cdktn/provider-aws'

const mailmanagerArchiveRetentionActual: mailmanagerArchive.MailmanagerArchiveRetentionActual = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### MailmanagerArchiveRetentionActualList <a name="MailmanagerArchiveRetentionActualList" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveRetentionActualList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveRetentionActualList.Initializer"></a>

```typescript
import { mailmanagerArchive } from '@cdktn/provider-aws'

new mailmanagerArchive.MailmanagerArchiveRetentionActualList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveRetentionActualList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveRetentionActualList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveRetentionActualList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveRetentionActualList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveRetentionActualList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveRetentionActualList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveRetentionActualList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveRetentionActualList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveRetentionActualList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveRetentionActualList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveRetentionActualList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveRetentionActualList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveRetentionActualList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveRetentionActualList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveRetentionActualList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveRetentionActualList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveRetentionActualList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveRetentionActualList.get"></a>

```typescript
public get(index: number): MailmanagerArchiveRetentionActualOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveRetentionActualList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveRetentionActualList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveRetentionActualList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveRetentionActualList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveRetentionActualList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### MailmanagerArchiveRetentionActualOutputReference <a name="MailmanagerArchiveRetentionActualOutputReference" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveRetentionActualOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveRetentionActualOutputReference.Initializer"></a>

```typescript
import { mailmanagerArchive } from '@cdktn/provider-aws'

new mailmanagerArchive.MailmanagerArchiveRetentionActualOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveRetentionActualOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveRetentionActualOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveRetentionActualOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveRetentionActualOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveRetentionActualOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveRetentionActualOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveRetentionActualOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveRetentionActualOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveRetentionActualOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveRetentionActualOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveRetentionActualOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveRetentionActualOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveRetentionActualOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveRetentionActualOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveRetentionActualOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveRetentionActualOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveRetentionActualOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveRetentionActualOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveRetentionActualOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveRetentionActualOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveRetentionActualOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveRetentionActualOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveRetentionActualOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveRetentionActualOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveRetentionActualOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveRetentionActualOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveRetentionActualOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveRetentionActualOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveRetentionActualOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveRetentionActualOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveRetentionActualOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveRetentionActualOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveRetentionActualOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveRetentionActualOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveRetentionActualOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveRetentionActualOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveRetentionActualOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveRetentionActualOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveRetentionActualOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveRetentionActualOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveRetentionActualOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveRetentionActualOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveRetentionActualOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveRetentionActualOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveRetentionActualOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveRetentionActualOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveRetentionActualOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveRetentionActualOutputReference.property.retentionPeriod">retentionPeriod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveRetentionActualOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveRetentionActual">MailmanagerArchiveRetentionActual</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveRetentionActualOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveRetentionActualOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `retentionPeriod`<sup>Required</sup> <a name="retentionPeriod" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveRetentionActualOutputReference.property.retentionPeriod"></a>

```typescript
public readonly retentionPeriod: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveRetentionActualOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: MailmanagerArchiveRetentionActual;
```

- *Type:* <a href="#@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveRetentionActual">MailmanagerArchiveRetentionActual</a>

---


### MailmanagerArchiveRetentionList <a name="MailmanagerArchiveRetentionList" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveRetentionList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveRetentionList.Initializer"></a>

```typescript
import { mailmanagerArchive } from '@cdktn/provider-aws'

new mailmanagerArchive.MailmanagerArchiveRetentionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveRetentionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveRetentionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveRetentionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveRetentionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveRetentionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveRetentionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveRetentionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveRetentionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveRetentionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveRetentionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveRetentionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveRetentionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveRetentionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveRetentionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveRetentionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveRetentionList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveRetentionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveRetentionList.get"></a>

```typescript
public get(index: number): MailmanagerArchiveRetentionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveRetentionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveRetentionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveRetentionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveRetentionList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveRetention">MailmanagerArchiveRetention</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveRetentionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveRetentionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveRetentionList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MailmanagerArchiveRetention[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveRetention">MailmanagerArchiveRetention</a>[]

---


### MailmanagerArchiveRetentionOutputReference <a name="MailmanagerArchiveRetentionOutputReference" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveRetentionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveRetentionOutputReference.Initializer"></a>

```typescript
import { mailmanagerArchive } from '@cdktn/provider-aws'

new mailmanagerArchive.MailmanagerArchiveRetentionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveRetentionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveRetentionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveRetentionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveRetentionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveRetentionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveRetentionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveRetentionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveRetentionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveRetentionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveRetentionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveRetentionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveRetentionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveRetentionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveRetentionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveRetentionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveRetentionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveRetentionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveRetentionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveRetentionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveRetentionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveRetentionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveRetentionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveRetentionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveRetentionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveRetentionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveRetentionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveRetentionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveRetentionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveRetentionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveRetentionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveRetentionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveRetentionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveRetentionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveRetentionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveRetentionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveRetentionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveRetentionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveRetentionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveRetentionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveRetentionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveRetentionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveRetentionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveRetentionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveRetentionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveRetentionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveRetentionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveRetentionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveRetentionOutputReference.property.retentionPeriodInput">retentionPeriodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveRetentionOutputReference.property.retentionPeriod">retentionPeriod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveRetentionOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveRetention">MailmanagerArchiveRetention</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveRetentionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveRetentionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `retentionPeriodInput`<sup>Optional</sup> <a name="retentionPeriodInput" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveRetentionOutputReference.property.retentionPeriodInput"></a>

```typescript
public readonly retentionPeriodInput: string;
```

- *Type:* string

---

##### `retentionPeriod`<sup>Required</sup> <a name="retentionPeriod" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveRetentionOutputReference.property.retentionPeriod"></a>

```typescript
public readonly retentionPeriod: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveRetentionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | MailmanagerArchiveRetention;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.mailmanagerArchive.MailmanagerArchiveRetention">MailmanagerArchiveRetention</a>

---



