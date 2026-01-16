# `iamUserLoginProfile` Submodule <a name="`iamUserLoginProfile` Submodule" id="@cdktn/provider-aws.iamUserLoginProfile"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IamUserLoginProfile <a name="IamUserLoginProfile" id="@cdktn/provider-aws.iamUserLoginProfile.IamUserLoginProfile"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/iam_user_login_profile aws_iam_user_login_profile}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.iamUserLoginProfile.IamUserLoginProfile.Initializer"></a>

```typescript
import { iamUserLoginProfile } from '@cdktn/provider-aws'

new iamUserLoginProfile.IamUserLoginProfile(scope: Construct, id: string, config: IamUserLoginProfileConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.iamUserLoginProfile.IamUserLoginProfile.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.iamUserLoginProfile.IamUserLoginProfile.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.iamUserLoginProfile.IamUserLoginProfile.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-aws.iamUserLoginProfile.IamUserLoginProfileConfig">IamUserLoginProfileConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.iamUserLoginProfile.IamUserLoginProfile.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.iamUserLoginProfile.IamUserLoginProfile.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-aws.iamUserLoginProfile.IamUserLoginProfile.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.iamUserLoginProfile.IamUserLoginProfileConfig">IamUserLoginProfileConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.iamUserLoginProfile.IamUserLoginProfile.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.iamUserLoginProfile.IamUserLoginProfile.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.iamUserLoginProfile.IamUserLoginProfile.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.iamUserLoginProfile.IamUserLoginProfile.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.iamUserLoginProfile.IamUserLoginProfile.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.iamUserLoginProfile.IamUserLoginProfile.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.iamUserLoginProfile.IamUserLoginProfile.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.iamUserLoginProfile.IamUserLoginProfile.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.iamUserLoginProfile.IamUserLoginProfile.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.iamUserLoginProfile.IamUserLoginProfile.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.iamUserLoginProfile.IamUserLoginProfile.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.iamUserLoginProfile.IamUserLoginProfile.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.iamUserLoginProfile.IamUserLoginProfile.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.iamUserLoginProfile.IamUserLoginProfile.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.iamUserLoginProfile.IamUserLoginProfile.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.iamUserLoginProfile.IamUserLoginProfile.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.iamUserLoginProfile.IamUserLoginProfile.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.iamUserLoginProfile.IamUserLoginProfile.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.iamUserLoginProfile.IamUserLoginProfile.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.iamUserLoginProfile.IamUserLoginProfile.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.iamUserLoginProfile.IamUserLoginProfile.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.iamUserLoginProfile.IamUserLoginProfile.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.iamUserLoginProfile.IamUserLoginProfile.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.iamUserLoginProfile.IamUserLoginProfile.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.iamUserLoginProfile.IamUserLoginProfile.resetPasswordLength">resetPasswordLength</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.iamUserLoginProfile.IamUserLoginProfile.resetPasswordResetRequired">resetPasswordResetRequired</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.iamUserLoginProfile.IamUserLoginProfile.resetPgpKey">resetPgpKey</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.iamUserLoginProfile.IamUserLoginProfile.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktn/provider-aws.iamUserLoginProfile.IamUserLoginProfile.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.iamUserLoginProfile.IamUserLoginProfile.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.iamUserLoginProfile.IamUserLoginProfile.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-aws.iamUserLoginProfile.IamUserLoginProfile.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.iamUserLoginProfile.IamUserLoginProfile.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-aws.iamUserLoginProfile.IamUserLoginProfile.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-aws.iamUserLoginProfile.IamUserLoginProfile.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-aws.iamUserLoginProfile.IamUserLoginProfile.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-aws.iamUserLoginProfile.IamUserLoginProfile.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-aws.iamUserLoginProfile.IamUserLoginProfile.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.iamUserLoginProfile.IamUserLoginProfile.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.iamUserLoginProfile.IamUserLoginProfile.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.iamUserLoginProfile.IamUserLoginProfile.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.iamUserLoginProfile.IamUserLoginProfile.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.iamUserLoginProfile.IamUserLoginProfile.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.iamUserLoginProfile.IamUserLoginProfile.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.iamUserLoginProfile.IamUserLoginProfile.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.iamUserLoginProfile.IamUserLoginProfile.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.iamUserLoginProfile.IamUserLoginProfile.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.iamUserLoginProfile.IamUserLoginProfile.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.iamUserLoginProfile.IamUserLoginProfile.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.iamUserLoginProfile.IamUserLoginProfile.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.iamUserLoginProfile.IamUserLoginProfile.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.iamUserLoginProfile.IamUserLoginProfile.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.iamUserLoginProfile.IamUserLoginProfile.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.iamUserLoginProfile.IamUserLoginProfile.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.iamUserLoginProfile.IamUserLoginProfile.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.iamUserLoginProfile.IamUserLoginProfile.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.iamUserLoginProfile.IamUserLoginProfile.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-aws.iamUserLoginProfile.IamUserLoginProfile.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-aws.iamUserLoginProfile.IamUserLoginProfile.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.iamUserLoginProfile.IamUserLoginProfile.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.iamUserLoginProfile.IamUserLoginProfile.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.iamUserLoginProfile.IamUserLoginProfile.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.iamUserLoginProfile.IamUserLoginProfile.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-aws.iamUserLoginProfile.IamUserLoginProfile.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.iamUserLoginProfile.IamUserLoginProfile.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-aws.iamUserLoginProfile.IamUserLoginProfile.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.iamUserLoginProfile.IamUserLoginProfile.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.iamUserLoginProfile.IamUserLoginProfile.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-aws.iamUserLoginProfile.IamUserLoginProfile.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.iamUserLoginProfile.IamUserLoginProfile.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetId` <a name="resetId" id="@cdktn/provider-aws.iamUserLoginProfile.IamUserLoginProfile.resetId"></a>

```typescript
public resetId(): void
```

##### `resetPasswordLength` <a name="resetPasswordLength" id="@cdktn/provider-aws.iamUserLoginProfile.IamUserLoginProfile.resetPasswordLength"></a>

```typescript
public resetPasswordLength(): void
```

##### `resetPasswordResetRequired` <a name="resetPasswordResetRequired" id="@cdktn/provider-aws.iamUserLoginProfile.IamUserLoginProfile.resetPasswordResetRequired"></a>

```typescript
public resetPasswordResetRequired(): void
```

##### `resetPgpKey` <a name="resetPgpKey" id="@cdktn/provider-aws.iamUserLoginProfile.IamUserLoginProfile.resetPgpKey"></a>

```typescript
public resetPgpKey(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.iamUserLoginProfile.IamUserLoginProfile.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.iamUserLoginProfile.IamUserLoginProfile.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.iamUserLoginProfile.IamUserLoginProfile.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.iamUserLoginProfile.IamUserLoginProfile.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a IamUserLoginProfile resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-aws.iamUserLoginProfile.IamUserLoginProfile.isConstruct"></a>

```typescript
import { iamUserLoginProfile } from '@cdktn/provider-aws'

iamUserLoginProfile.IamUserLoginProfile.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.iamUserLoginProfile.IamUserLoginProfile.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-aws.iamUserLoginProfile.IamUserLoginProfile.isTerraformElement"></a>

```typescript
import { iamUserLoginProfile } from '@cdktn/provider-aws'

iamUserLoginProfile.IamUserLoginProfile.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.iamUserLoginProfile.IamUserLoginProfile.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-aws.iamUserLoginProfile.IamUserLoginProfile.isTerraformResource"></a>

```typescript
import { iamUserLoginProfile } from '@cdktn/provider-aws'

iamUserLoginProfile.IamUserLoginProfile.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.iamUserLoginProfile.IamUserLoginProfile.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-aws.iamUserLoginProfile.IamUserLoginProfile.generateConfigForImport"></a>

```typescript
import { iamUserLoginProfile } from '@cdktn/provider-aws'

iamUserLoginProfile.IamUserLoginProfile.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a IamUserLoginProfile resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.iamUserLoginProfile.IamUserLoginProfile.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.iamUserLoginProfile.IamUserLoginProfile.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the IamUserLoginProfile to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.iamUserLoginProfile.IamUserLoginProfile.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing IamUserLoginProfile that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/iam_user_login_profile#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.iamUserLoginProfile.IamUserLoginProfile.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the IamUserLoginProfile to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.iamUserLoginProfile.IamUserLoginProfile.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.iamUserLoginProfile.IamUserLoginProfile.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.iamUserLoginProfile.IamUserLoginProfile.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.iamUserLoginProfile.IamUserLoginProfile.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.iamUserLoginProfile.IamUserLoginProfile.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.iamUserLoginProfile.IamUserLoginProfile.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.iamUserLoginProfile.IamUserLoginProfile.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.iamUserLoginProfile.IamUserLoginProfile.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.iamUserLoginProfile.IamUserLoginProfile.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.iamUserLoginProfile.IamUserLoginProfile.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.iamUserLoginProfile.IamUserLoginProfile.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.iamUserLoginProfile.IamUserLoginProfile.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.iamUserLoginProfile.IamUserLoginProfile.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.iamUserLoginProfile.IamUserLoginProfile.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.iamUserLoginProfile.IamUserLoginProfile.property.encryptedPassword">encryptedPassword</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.iamUserLoginProfile.IamUserLoginProfile.property.keyFingerprint">keyFingerprint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.iamUserLoginProfile.IamUserLoginProfile.property.password">password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.iamUserLoginProfile.IamUserLoginProfile.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.iamUserLoginProfile.IamUserLoginProfile.property.passwordLengthInput">passwordLengthInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.iamUserLoginProfile.IamUserLoginProfile.property.passwordResetRequiredInput">passwordResetRequiredInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.iamUserLoginProfile.IamUserLoginProfile.property.pgpKeyInput">pgpKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.iamUserLoginProfile.IamUserLoginProfile.property.userInput">userInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.iamUserLoginProfile.IamUserLoginProfile.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.iamUserLoginProfile.IamUserLoginProfile.property.passwordLength">passwordLength</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.iamUserLoginProfile.IamUserLoginProfile.property.passwordResetRequired">passwordResetRequired</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.iamUserLoginProfile.IamUserLoginProfile.property.pgpKey">pgpKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.iamUserLoginProfile.IamUserLoginProfile.property.user">user</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.iamUserLoginProfile.IamUserLoginProfile.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-aws.iamUserLoginProfile.IamUserLoginProfile.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.iamUserLoginProfile.IamUserLoginProfile.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-aws.iamUserLoginProfile.IamUserLoginProfile.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-aws.iamUserLoginProfile.IamUserLoginProfile.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-aws.iamUserLoginProfile.IamUserLoginProfile.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-aws.iamUserLoginProfile.IamUserLoginProfile.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.iamUserLoginProfile.IamUserLoginProfile.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.iamUserLoginProfile.IamUserLoginProfile.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.iamUserLoginProfile.IamUserLoginProfile.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.iamUserLoginProfile.IamUserLoginProfile.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.iamUserLoginProfile.IamUserLoginProfile.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.iamUserLoginProfile.IamUserLoginProfile.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.iamUserLoginProfile.IamUserLoginProfile.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `encryptedPassword`<sup>Required</sup> <a name="encryptedPassword" id="@cdktn/provider-aws.iamUserLoginProfile.IamUserLoginProfile.property.encryptedPassword"></a>

```typescript
public readonly encryptedPassword: string;
```

- *Type:* string

---

##### `keyFingerprint`<sup>Required</sup> <a name="keyFingerprint" id="@cdktn/provider-aws.iamUserLoginProfile.IamUserLoginProfile.property.keyFingerprint"></a>

```typescript
public readonly keyFingerprint: string;
```

- *Type:* string

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktn/provider-aws.iamUserLoginProfile.IamUserLoginProfile.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-aws.iamUserLoginProfile.IamUserLoginProfile.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `passwordLengthInput`<sup>Optional</sup> <a name="passwordLengthInput" id="@cdktn/provider-aws.iamUserLoginProfile.IamUserLoginProfile.property.passwordLengthInput"></a>

```typescript
public readonly passwordLengthInput: number;
```

- *Type:* number

---

##### `passwordResetRequiredInput`<sup>Optional</sup> <a name="passwordResetRequiredInput" id="@cdktn/provider-aws.iamUserLoginProfile.IamUserLoginProfile.property.passwordResetRequiredInput"></a>

```typescript
public readonly passwordResetRequiredInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `pgpKeyInput`<sup>Optional</sup> <a name="pgpKeyInput" id="@cdktn/provider-aws.iamUserLoginProfile.IamUserLoginProfile.property.pgpKeyInput"></a>

```typescript
public readonly pgpKeyInput: string;
```

- *Type:* string

---

##### `userInput`<sup>Optional</sup> <a name="userInput" id="@cdktn/provider-aws.iamUserLoginProfile.IamUserLoginProfile.property.userInput"></a>

```typescript
public readonly userInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.iamUserLoginProfile.IamUserLoginProfile.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `passwordLength`<sup>Required</sup> <a name="passwordLength" id="@cdktn/provider-aws.iamUserLoginProfile.IamUserLoginProfile.property.passwordLength"></a>

```typescript
public readonly passwordLength: number;
```

- *Type:* number

---

##### `passwordResetRequired`<sup>Required</sup> <a name="passwordResetRequired" id="@cdktn/provider-aws.iamUserLoginProfile.IamUserLoginProfile.property.passwordResetRequired"></a>

```typescript
public readonly passwordResetRequired: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `pgpKey`<sup>Required</sup> <a name="pgpKey" id="@cdktn/provider-aws.iamUserLoginProfile.IamUserLoginProfile.property.pgpKey"></a>

```typescript
public readonly pgpKey: string;
```

- *Type:* string

---

##### `user`<sup>Required</sup> <a name="user" id="@cdktn/provider-aws.iamUserLoginProfile.IamUserLoginProfile.property.user"></a>

```typescript
public readonly user: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.iamUserLoginProfile.IamUserLoginProfile.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.iamUserLoginProfile.IamUserLoginProfile.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### IamUserLoginProfileConfig <a name="IamUserLoginProfileConfig" id="@cdktn/provider-aws.iamUserLoginProfile.IamUserLoginProfileConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.iamUserLoginProfile.IamUserLoginProfileConfig.Initializer"></a>

```typescript
import { iamUserLoginProfile } from '@cdktn/provider-aws'

const iamUserLoginProfileConfig: iamUserLoginProfile.IamUserLoginProfileConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.iamUserLoginProfile.IamUserLoginProfileConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.iamUserLoginProfile.IamUserLoginProfileConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.iamUserLoginProfile.IamUserLoginProfileConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.iamUserLoginProfile.IamUserLoginProfileConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.iamUserLoginProfile.IamUserLoginProfileConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.iamUserLoginProfile.IamUserLoginProfileConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.iamUserLoginProfile.IamUserLoginProfileConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.iamUserLoginProfile.IamUserLoginProfileConfig.property.user">user</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/iam_user_login_profile#user IamUserLoginProfile#user}. |
| <code><a href="#@cdktn/provider-aws.iamUserLoginProfile.IamUserLoginProfileConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/iam_user_login_profile#id IamUserLoginProfile#id}. |
| <code><a href="#@cdktn/provider-aws.iamUserLoginProfile.IamUserLoginProfileConfig.property.passwordLength">passwordLength</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/iam_user_login_profile#password_length IamUserLoginProfile#password_length}. |
| <code><a href="#@cdktn/provider-aws.iamUserLoginProfile.IamUserLoginProfileConfig.property.passwordResetRequired">passwordResetRequired</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/iam_user_login_profile#password_reset_required IamUserLoginProfile#password_reset_required}. |
| <code><a href="#@cdktn/provider-aws.iamUserLoginProfile.IamUserLoginProfileConfig.property.pgpKey">pgpKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/iam_user_login_profile#pgp_key IamUserLoginProfile#pgp_key}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.iamUserLoginProfile.IamUserLoginProfileConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.iamUserLoginProfile.IamUserLoginProfileConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.iamUserLoginProfile.IamUserLoginProfileConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.iamUserLoginProfile.IamUserLoginProfileConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.iamUserLoginProfile.IamUserLoginProfileConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.iamUserLoginProfile.IamUserLoginProfileConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.iamUserLoginProfile.IamUserLoginProfileConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `user`<sup>Required</sup> <a name="user" id="@cdktn/provider-aws.iamUserLoginProfile.IamUserLoginProfileConfig.property.user"></a>

```typescript
public readonly user: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/iam_user_login_profile#user IamUserLoginProfile#user}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-aws.iamUserLoginProfile.IamUserLoginProfileConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/iam_user_login_profile#id IamUserLoginProfile#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `passwordLength`<sup>Optional</sup> <a name="passwordLength" id="@cdktn/provider-aws.iamUserLoginProfile.IamUserLoginProfileConfig.property.passwordLength"></a>

```typescript
public readonly passwordLength: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/iam_user_login_profile#password_length IamUserLoginProfile#password_length}.

---

##### `passwordResetRequired`<sup>Optional</sup> <a name="passwordResetRequired" id="@cdktn/provider-aws.iamUserLoginProfile.IamUserLoginProfileConfig.property.passwordResetRequired"></a>

```typescript
public readonly passwordResetRequired: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/iam_user_login_profile#password_reset_required IamUserLoginProfile#password_reset_required}.

---

##### `pgpKey`<sup>Optional</sup> <a name="pgpKey" id="@cdktn/provider-aws.iamUserLoginProfile.IamUserLoginProfileConfig.property.pgpKey"></a>

```typescript
public readonly pgpKey: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/iam_user_login_profile#pgp_key IamUserLoginProfile#pgp_key}.

---



