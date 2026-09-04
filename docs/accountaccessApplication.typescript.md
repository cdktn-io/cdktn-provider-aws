# `accountaccessApplication` Submodule <a name="`accountaccessApplication` Submodule" id="@cdktn/provider-aws.accountaccessApplication"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AccountaccessApplication <a name="AccountaccessApplication" id="@cdktn/provider-aws.accountaccessApplication.AccountaccessApplication"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/accountaccess_application aws_accountaccess_application}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.accountaccessApplication.AccountaccessApplication.Initializer"></a>

```typescript
import { accountaccessApplication } from '@cdktn/provider-aws'

new accountaccessApplication.AccountaccessApplication(scope: Construct, id: string, config?: AccountaccessApplicationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.accountaccessApplication.AccountaccessApplication.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.accountaccessApplication.AccountaccessApplication.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.accountaccessApplication.AccountaccessApplication.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-aws.accountaccessApplication.AccountaccessApplicationConfig">AccountaccessApplicationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.accountaccessApplication.AccountaccessApplication.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.accountaccessApplication.AccountaccessApplication.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-aws.accountaccessApplication.AccountaccessApplication.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.accountaccessApplication.AccountaccessApplicationConfig">AccountaccessApplicationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.accountaccessApplication.AccountaccessApplication.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.accountaccessApplication.AccountaccessApplication.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.accountaccessApplication.AccountaccessApplication.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessApplication.AccountaccessApplication.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.accountaccessApplication.AccountaccessApplication.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.accountaccessApplication.AccountaccessApplication.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessApplication.AccountaccessApplication.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessApplication.AccountaccessApplication.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.accountaccessApplication.AccountaccessApplication.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.accountaccessApplication.AccountaccessApplication.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessApplication.AccountaccessApplication.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessApplication.AccountaccessApplication.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessApplication.AccountaccessApplication.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessApplication.AccountaccessApplication.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessApplication.AccountaccessApplication.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessApplication.AccountaccessApplication.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessApplication.AccountaccessApplication.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessApplication.AccountaccessApplication.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessApplication.AccountaccessApplication.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessApplication.AccountaccessApplication.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessApplication.AccountaccessApplication.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessApplication.AccountaccessApplication.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.accountaccessApplication.AccountaccessApplication.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.accountaccessApplication.AccountaccessApplication.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.accountaccessApplication.AccountaccessApplication.putIdentitySource">putIdentitySource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessApplication.AccountaccessApplication.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessApplication.AccountaccessApplication.resetIdentitySource">resetIdentitySource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessApplication.AccountaccessApplication.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessApplication.AccountaccessApplication.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessApplication.AccountaccessApplication.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.accountaccessApplication.AccountaccessApplication.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-aws.accountaccessApplication.AccountaccessApplication.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.accountaccessApplication.AccountaccessApplication.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-aws.accountaccessApplication.AccountaccessApplication.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.accountaccessApplication.AccountaccessApplication.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.accountaccessApplication.AccountaccessApplication.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-aws.accountaccessApplication.AccountaccessApplication.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.accountaccessApplication.AccountaccessApplication.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-aws.accountaccessApplication.AccountaccessApplication.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-aws.accountaccessApplication.AccountaccessApplication.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-aws.accountaccessApplication.AccountaccessApplication.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-aws.accountaccessApplication.AccountaccessApplication.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-aws.accountaccessApplication.AccountaccessApplication.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.accountaccessApplication.AccountaccessApplication.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.accountaccessApplication.AccountaccessApplication.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.accountaccessApplication.AccountaccessApplication.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.accountaccessApplication.AccountaccessApplication.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.accountaccessApplication.AccountaccessApplication.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.accountaccessApplication.AccountaccessApplication.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.accountaccessApplication.AccountaccessApplication.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.accountaccessApplication.AccountaccessApplication.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.accountaccessApplication.AccountaccessApplication.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.accountaccessApplication.AccountaccessApplication.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.accountaccessApplication.AccountaccessApplication.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.accountaccessApplication.AccountaccessApplication.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.accountaccessApplication.AccountaccessApplication.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.accountaccessApplication.AccountaccessApplication.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.accountaccessApplication.AccountaccessApplication.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.accountaccessApplication.AccountaccessApplication.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.accountaccessApplication.AccountaccessApplication.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.accountaccessApplication.AccountaccessApplication.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.accountaccessApplication.AccountaccessApplication.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-aws.accountaccessApplication.AccountaccessApplication.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-aws.accountaccessApplication.AccountaccessApplication.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.accountaccessApplication.AccountaccessApplication.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.accountaccessApplication.AccountaccessApplication.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.accountaccessApplication.AccountaccessApplication.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.accountaccessApplication.AccountaccessApplication.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-aws.accountaccessApplication.AccountaccessApplication.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.accountaccessApplication.AccountaccessApplication.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-aws.accountaccessApplication.AccountaccessApplication.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.accountaccessApplication.AccountaccessApplication.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.accountaccessApplication.AccountaccessApplication.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-aws.accountaccessApplication.AccountaccessApplication.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.accountaccessApplication.AccountaccessApplication.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putIdentitySource` <a name="putIdentitySource" id="@cdktn/provider-aws.accountaccessApplication.AccountaccessApplication.putIdentitySource"></a>

```typescript
public putIdentitySource(value: IResolvable | AccountaccessApplicationIdentitySource[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.accountaccessApplication.AccountaccessApplication.putIdentitySource.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.accountaccessApplication.AccountaccessApplicationIdentitySource">AccountaccessApplicationIdentitySource</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-aws.accountaccessApplication.AccountaccessApplication.putTimeouts"></a>

```typescript
public putTimeouts(value: AccountaccessApplicationTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.accountaccessApplication.AccountaccessApplication.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.accountaccessApplication.AccountaccessApplicationTimeouts">AccountaccessApplicationTimeouts</a>

---

##### `resetIdentitySource` <a name="resetIdentitySource" id="@cdktn/provider-aws.accountaccessApplication.AccountaccessApplication.resetIdentitySource"></a>

```typescript
public resetIdentitySource(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-aws.accountaccessApplication.AccountaccessApplication.resetRegion"></a>

```typescript
public resetRegion(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-aws.accountaccessApplication.AccountaccessApplication.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-aws.accountaccessApplication.AccountaccessApplication.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.accountaccessApplication.AccountaccessApplication.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.accountaccessApplication.AccountaccessApplication.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessApplication.AccountaccessApplication.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessApplication.AccountaccessApplication.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a AccountaccessApplication resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-aws.accountaccessApplication.AccountaccessApplication.isConstruct"></a>

```typescript
import { accountaccessApplication } from '@cdktn/provider-aws'

accountaccessApplication.AccountaccessApplication.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.accountaccessApplication.AccountaccessApplication.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-aws.accountaccessApplication.AccountaccessApplication.isTerraformElement"></a>

```typescript
import { accountaccessApplication } from '@cdktn/provider-aws'

accountaccessApplication.AccountaccessApplication.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.accountaccessApplication.AccountaccessApplication.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-aws.accountaccessApplication.AccountaccessApplication.isTerraformResource"></a>

```typescript
import { accountaccessApplication } from '@cdktn/provider-aws'

accountaccessApplication.AccountaccessApplication.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.accountaccessApplication.AccountaccessApplication.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-aws.accountaccessApplication.AccountaccessApplication.generateConfigForImport"></a>

```typescript
import { accountaccessApplication } from '@cdktn/provider-aws'

accountaccessApplication.AccountaccessApplication.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a AccountaccessApplication resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.accountaccessApplication.AccountaccessApplication.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.accountaccessApplication.AccountaccessApplication.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the AccountaccessApplication to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.accountaccessApplication.AccountaccessApplication.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing AccountaccessApplication that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/accountaccess_application#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.accountaccessApplication.AccountaccessApplication.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the AccountaccessApplication to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.accountaccessApplication.AccountaccessApplication.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.accountaccessApplication.AccountaccessApplication.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessApplication.AccountaccessApplication.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessApplication.AccountaccessApplication.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessApplication.AccountaccessApplication.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessApplication.AccountaccessApplication.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessApplication.AccountaccessApplication.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessApplication.AccountaccessApplication.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessApplication.AccountaccessApplication.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessApplication.AccountaccessApplication.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessApplication.AccountaccessApplication.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessApplication.AccountaccessApplication.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessApplication.AccountaccessApplication.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessApplication.AccountaccessApplication.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessApplication.AccountaccessApplication.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessApplication.AccountaccessApplication.property.identitySource">identitySource</a></code> | <code><a href="#@cdktn/provider-aws.accountaccessApplication.AccountaccessApplicationIdentitySourceList">AccountaccessApplicationIdentitySourceList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessApplication.AccountaccessApplication.property.tagsAll">tagsAll</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessApplication.AccountaccessApplication.property.tenantId">tenantId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessApplication.AccountaccessApplication.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.accountaccessApplication.AccountaccessApplicationTimeoutsOutputReference">AccountaccessApplicationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessApplication.AccountaccessApplication.property.identitySourceInput">identitySourceInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.accountaccessApplication.AccountaccessApplicationIdentitySource">AccountaccessApplicationIdentitySource</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessApplication.AccountaccessApplication.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessApplication.AccountaccessApplication.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessApplication.AccountaccessApplication.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.accountaccessApplication.AccountaccessApplicationTimeouts">AccountaccessApplicationTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessApplication.AccountaccessApplication.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessApplication.AccountaccessApplication.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.accountaccessApplication.AccountaccessApplication.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-aws.accountaccessApplication.AccountaccessApplication.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.accountaccessApplication.AccountaccessApplication.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-aws.accountaccessApplication.AccountaccessApplication.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-aws.accountaccessApplication.AccountaccessApplication.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-aws.accountaccessApplication.AccountaccessApplication.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-aws.accountaccessApplication.AccountaccessApplication.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.accountaccessApplication.AccountaccessApplication.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.accountaccessApplication.AccountaccessApplication.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.accountaccessApplication.AccountaccessApplication.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.accountaccessApplication.AccountaccessApplication.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.accountaccessApplication.AccountaccessApplication.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.accountaccessApplication.AccountaccessApplication.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.accountaccessApplication.AccountaccessApplication.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-aws.accountaccessApplication.AccountaccessApplication.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `identitySource`<sup>Required</sup> <a name="identitySource" id="@cdktn/provider-aws.accountaccessApplication.AccountaccessApplication.property.identitySource"></a>

```typescript
public readonly identitySource: AccountaccessApplicationIdentitySourceList;
```

- *Type:* <a href="#@cdktn/provider-aws.accountaccessApplication.AccountaccessApplicationIdentitySourceList">AccountaccessApplicationIdentitySourceList</a>

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktn/provider-aws.accountaccessApplication.AccountaccessApplication.property.tagsAll"></a>

```typescript
public readonly tagsAll: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `tenantId`<sup>Required</sup> <a name="tenantId" id="@cdktn/provider-aws.accountaccessApplication.AccountaccessApplication.property.tenantId"></a>

```typescript
public readonly tenantId: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-aws.accountaccessApplication.AccountaccessApplication.property.timeouts"></a>

```typescript
public readonly timeouts: AccountaccessApplicationTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-aws.accountaccessApplication.AccountaccessApplicationTimeoutsOutputReference">AccountaccessApplicationTimeoutsOutputReference</a>

---

##### `identitySourceInput`<sup>Optional</sup> <a name="identitySourceInput" id="@cdktn/provider-aws.accountaccessApplication.AccountaccessApplication.property.identitySourceInput"></a>

```typescript
public readonly identitySourceInput: IResolvable | AccountaccessApplicationIdentitySource[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.accountaccessApplication.AccountaccessApplicationIdentitySource">AccountaccessApplicationIdentitySource</a>[]

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-aws.accountaccessApplication.AccountaccessApplication.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-aws.accountaccessApplication.AccountaccessApplication.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-aws.accountaccessApplication.AccountaccessApplication.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | AccountaccessApplicationTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.accountaccessApplication.AccountaccessApplicationTimeouts">AccountaccessApplicationTimeouts</a>

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.accountaccessApplication.AccountaccessApplication.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-aws.accountaccessApplication.AccountaccessApplication.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.accountaccessApplication.AccountaccessApplication.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.accountaccessApplication.AccountaccessApplication.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AccountaccessApplicationConfig <a name="AccountaccessApplicationConfig" id="@cdktn/provider-aws.accountaccessApplication.AccountaccessApplicationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.accountaccessApplication.AccountaccessApplicationConfig.Initializer"></a>

```typescript
import { accountaccessApplication } from '@cdktn/provider-aws'

const accountaccessApplicationConfig: accountaccessApplication.AccountaccessApplicationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.accountaccessApplication.AccountaccessApplicationConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessApplication.AccountaccessApplicationConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessApplication.AccountaccessApplicationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessApplication.AccountaccessApplicationConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessApplication.AccountaccessApplicationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessApplication.AccountaccessApplicationConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessApplication.AccountaccessApplicationConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessApplication.AccountaccessApplicationConfig.property.identitySource">identitySource</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.accountaccessApplication.AccountaccessApplicationIdentitySource">AccountaccessApplicationIdentitySource</a>[]</code> | identity_source block. |
| <code><a href="#@cdktn/provider-aws.accountaccessApplication.AccountaccessApplicationConfig.property.region">region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.accountaccessApplication.AccountaccessApplicationConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/accountaccess_application#tags AccountaccessApplication#tags}. |
| <code><a href="#@cdktn/provider-aws.accountaccessApplication.AccountaccessApplicationConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.accountaccessApplication.AccountaccessApplicationTimeouts">AccountaccessApplicationTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.accountaccessApplication.AccountaccessApplicationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.accountaccessApplication.AccountaccessApplicationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.accountaccessApplication.AccountaccessApplicationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.accountaccessApplication.AccountaccessApplicationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.accountaccessApplication.AccountaccessApplicationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.accountaccessApplication.AccountaccessApplicationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.accountaccessApplication.AccountaccessApplicationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `identitySource`<sup>Optional</sup> <a name="identitySource" id="@cdktn/provider-aws.accountaccessApplication.AccountaccessApplicationConfig.property.identitySource"></a>

```typescript
public readonly identitySource: IResolvable | AccountaccessApplicationIdentitySource[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.accountaccessApplication.AccountaccessApplicationIdentitySource">AccountaccessApplicationIdentitySource</a>[]

identity_source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/accountaccess_application#identity_source AccountaccessApplication#identity_source}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.accountaccessApplication.AccountaccessApplicationConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/accountaccess_application#region AccountaccessApplication#region}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-aws.accountaccessApplication.AccountaccessApplicationConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/accountaccess_application#tags AccountaccessApplication#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-aws.accountaccessApplication.AccountaccessApplicationConfig.property.timeouts"></a>

```typescript
public readonly timeouts: AccountaccessApplicationTimeouts;
```

- *Type:* <a href="#@cdktn/provider-aws.accountaccessApplication.AccountaccessApplicationTimeouts">AccountaccessApplicationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/accountaccess_application#timeouts AccountaccessApplication#timeouts}

---

### AccountaccessApplicationIdentitySource <a name="AccountaccessApplicationIdentitySource" id="@cdktn/provider-aws.accountaccessApplication.AccountaccessApplicationIdentitySource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.accountaccessApplication.AccountaccessApplicationIdentitySource.Initializer"></a>

```typescript
import { accountaccessApplication } from '@cdktn/provider-aws'

const accountaccessApplicationIdentitySource: accountaccessApplication.AccountaccessApplicationIdentitySource = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.accountaccessApplication.AccountaccessApplicationIdentitySource.property.identityCenter">identityCenter</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.accountaccessApplication.AccountaccessApplicationIdentitySourceIdentityCenter">AccountaccessApplicationIdentitySourceIdentityCenter</a>[]</code> | identity_center block. |

---

##### `identityCenter`<sup>Optional</sup> <a name="identityCenter" id="@cdktn/provider-aws.accountaccessApplication.AccountaccessApplicationIdentitySource.property.identityCenter"></a>

```typescript
public readonly identityCenter: IResolvable | AccountaccessApplicationIdentitySourceIdentityCenter[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.accountaccessApplication.AccountaccessApplicationIdentitySourceIdentityCenter">AccountaccessApplicationIdentitySourceIdentityCenter</a>[]

identity_center block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/accountaccess_application#identity_center AccountaccessApplication#identity_center}

---

### AccountaccessApplicationIdentitySourceIdentityCenter <a name="AccountaccessApplicationIdentitySourceIdentityCenter" id="@cdktn/provider-aws.accountaccessApplication.AccountaccessApplicationIdentitySourceIdentityCenter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.accountaccessApplication.AccountaccessApplicationIdentitySourceIdentityCenter.Initializer"></a>

```typescript
import { accountaccessApplication } from '@cdktn/provider-aws'

const accountaccessApplicationIdentitySourceIdentityCenter: accountaccessApplication.AccountaccessApplicationIdentitySourceIdentityCenter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.accountaccessApplication.AccountaccessApplicationIdentitySourceIdentityCenter.property.instanceArn">instanceArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/accountaccess_application#instance_arn AccountaccessApplication#instance_arn}. |

---

##### `instanceArn`<sup>Required</sup> <a name="instanceArn" id="@cdktn/provider-aws.accountaccessApplication.AccountaccessApplicationIdentitySourceIdentityCenter.property.instanceArn"></a>

```typescript
public readonly instanceArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/accountaccess_application#instance_arn AccountaccessApplication#instance_arn}.

---

### AccountaccessApplicationTimeouts <a name="AccountaccessApplicationTimeouts" id="@cdktn/provider-aws.accountaccessApplication.AccountaccessApplicationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.accountaccessApplication.AccountaccessApplicationTimeouts.Initializer"></a>

```typescript
import { accountaccessApplication } from '@cdktn/provider-aws'

const accountaccessApplicationTimeouts: accountaccessApplication.AccountaccessApplicationTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.accountaccessApplication.AccountaccessApplicationTimeouts.property.create">create</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |
| <code><a href="#@cdktn/provider-aws.accountaccessApplication.AccountaccessApplicationTimeouts.property.delete">delete</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-aws.accountaccessApplication.AccountaccessApplicationTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/accountaccess_application#create AccountaccessApplication#create}

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-aws.accountaccessApplication.AccountaccessApplicationTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/accountaccess_application#delete AccountaccessApplication#delete}

---

## Classes <a name="Classes" id="Classes"></a>

### AccountaccessApplicationIdentitySourceIdentityCenterList <a name="AccountaccessApplicationIdentitySourceIdentityCenterList" id="@cdktn/provider-aws.accountaccessApplication.AccountaccessApplicationIdentitySourceIdentityCenterList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.accountaccessApplication.AccountaccessApplicationIdentitySourceIdentityCenterList.Initializer"></a>

```typescript
import { accountaccessApplication } from '@cdktn/provider-aws'

new accountaccessApplication.AccountaccessApplicationIdentitySourceIdentityCenterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.accountaccessApplication.AccountaccessApplicationIdentitySourceIdentityCenterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.accountaccessApplication.AccountaccessApplicationIdentitySourceIdentityCenterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.accountaccessApplication.AccountaccessApplicationIdentitySourceIdentityCenterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.accountaccessApplication.AccountaccessApplicationIdentitySourceIdentityCenterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.accountaccessApplication.AccountaccessApplicationIdentitySourceIdentityCenterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.accountaccessApplication.AccountaccessApplicationIdentitySourceIdentityCenterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.accountaccessApplication.AccountaccessApplicationIdentitySourceIdentityCenterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.accountaccessApplication.AccountaccessApplicationIdentitySourceIdentityCenterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessApplication.AccountaccessApplicationIdentitySourceIdentityCenterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.accountaccessApplication.AccountaccessApplicationIdentitySourceIdentityCenterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.accountaccessApplication.AccountaccessApplicationIdentitySourceIdentityCenterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.accountaccessApplication.AccountaccessApplicationIdentitySourceIdentityCenterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.accountaccessApplication.AccountaccessApplicationIdentitySourceIdentityCenterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.accountaccessApplication.AccountaccessApplicationIdentitySourceIdentityCenterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.accountaccessApplication.AccountaccessApplicationIdentitySourceIdentityCenterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.accountaccessApplication.AccountaccessApplicationIdentitySourceIdentityCenterList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.accountaccessApplication.AccountaccessApplicationIdentitySourceIdentityCenterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.accountaccessApplication.AccountaccessApplicationIdentitySourceIdentityCenterList.get"></a>

```typescript
public get(index: number): AccountaccessApplicationIdentitySourceIdentityCenterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.accountaccessApplication.AccountaccessApplicationIdentitySourceIdentityCenterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.accountaccessApplication.AccountaccessApplicationIdentitySourceIdentityCenterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.accountaccessApplication.AccountaccessApplicationIdentitySourceIdentityCenterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessApplication.AccountaccessApplicationIdentitySourceIdentityCenterList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.accountaccessApplication.AccountaccessApplicationIdentitySourceIdentityCenter">AccountaccessApplicationIdentitySourceIdentityCenter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.accountaccessApplication.AccountaccessApplicationIdentitySourceIdentityCenterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.accountaccessApplication.AccountaccessApplicationIdentitySourceIdentityCenterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.accountaccessApplication.AccountaccessApplicationIdentitySourceIdentityCenterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AccountaccessApplicationIdentitySourceIdentityCenter[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.accountaccessApplication.AccountaccessApplicationIdentitySourceIdentityCenter">AccountaccessApplicationIdentitySourceIdentityCenter</a>[]

---


### AccountaccessApplicationIdentitySourceIdentityCenterOutputReference <a name="AccountaccessApplicationIdentitySourceIdentityCenterOutputReference" id="@cdktn/provider-aws.accountaccessApplication.AccountaccessApplicationIdentitySourceIdentityCenterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.accountaccessApplication.AccountaccessApplicationIdentitySourceIdentityCenterOutputReference.Initializer"></a>

```typescript
import { accountaccessApplication } from '@cdktn/provider-aws'

new accountaccessApplication.AccountaccessApplicationIdentitySourceIdentityCenterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.accountaccessApplication.AccountaccessApplicationIdentitySourceIdentityCenterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.accountaccessApplication.AccountaccessApplicationIdentitySourceIdentityCenterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.accountaccessApplication.AccountaccessApplicationIdentitySourceIdentityCenterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.accountaccessApplication.AccountaccessApplicationIdentitySourceIdentityCenterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.accountaccessApplication.AccountaccessApplicationIdentitySourceIdentityCenterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.accountaccessApplication.AccountaccessApplicationIdentitySourceIdentityCenterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.accountaccessApplication.AccountaccessApplicationIdentitySourceIdentityCenterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.accountaccessApplication.AccountaccessApplicationIdentitySourceIdentityCenterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.accountaccessApplication.AccountaccessApplicationIdentitySourceIdentityCenterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessApplication.AccountaccessApplicationIdentitySourceIdentityCenterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessApplication.AccountaccessApplicationIdentitySourceIdentityCenterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessApplication.AccountaccessApplicationIdentitySourceIdentityCenterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessApplication.AccountaccessApplicationIdentitySourceIdentityCenterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessApplication.AccountaccessApplicationIdentitySourceIdentityCenterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessApplication.AccountaccessApplicationIdentitySourceIdentityCenterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessApplication.AccountaccessApplicationIdentitySourceIdentityCenterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessApplication.AccountaccessApplicationIdentitySourceIdentityCenterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessApplication.AccountaccessApplicationIdentitySourceIdentityCenterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessApplication.AccountaccessApplicationIdentitySourceIdentityCenterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessApplication.AccountaccessApplicationIdentitySourceIdentityCenterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.accountaccessApplication.AccountaccessApplicationIdentitySourceIdentityCenterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.accountaccessApplication.AccountaccessApplicationIdentitySourceIdentityCenterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.accountaccessApplication.AccountaccessApplicationIdentitySourceIdentityCenterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.accountaccessApplication.AccountaccessApplicationIdentitySourceIdentityCenterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.accountaccessApplication.AccountaccessApplicationIdentitySourceIdentityCenterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.accountaccessApplication.AccountaccessApplicationIdentitySourceIdentityCenterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.accountaccessApplication.AccountaccessApplicationIdentitySourceIdentityCenterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.accountaccessApplication.AccountaccessApplicationIdentitySourceIdentityCenterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.accountaccessApplication.AccountaccessApplicationIdentitySourceIdentityCenterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.accountaccessApplication.AccountaccessApplicationIdentitySourceIdentityCenterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.accountaccessApplication.AccountaccessApplicationIdentitySourceIdentityCenterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.accountaccessApplication.AccountaccessApplicationIdentitySourceIdentityCenterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.accountaccessApplication.AccountaccessApplicationIdentitySourceIdentityCenterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.accountaccessApplication.AccountaccessApplicationIdentitySourceIdentityCenterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.accountaccessApplication.AccountaccessApplicationIdentitySourceIdentityCenterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.accountaccessApplication.AccountaccessApplicationIdentitySourceIdentityCenterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.accountaccessApplication.AccountaccessApplicationIdentitySourceIdentityCenterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.accountaccessApplication.AccountaccessApplicationIdentitySourceIdentityCenterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.accountaccessApplication.AccountaccessApplicationIdentitySourceIdentityCenterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.accountaccessApplication.AccountaccessApplicationIdentitySourceIdentityCenterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.accountaccessApplication.AccountaccessApplicationIdentitySourceIdentityCenterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.accountaccessApplication.AccountaccessApplicationIdentitySourceIdentityCenterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.accountaccessApplication.AccountaccessApplicationIdentitySourceIdentityCenterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.accountaccessApplication.AccountaccessApplicationIdentitySourceIdentityCenterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.accountaccessApplication.AccountaccessApplicationIdentitySourceIdentityCenterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.accountaccessApplication.AccountaccessApplicationIdentitySourceIdentityCenterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.accountaccessApplication.AccountaccessApplicationIdentitySourceIdentityCenterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessApplication.AccountaccessApplicationIdentitySourceIdentityCenterOutputReference.property.applicationArn">applicationArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessApplication.AccountaccessApplicationIdentitySourceIdentityCenterOutputReference.property.instanceArnInput">instanceArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessApplication.AccountaccessApplicationIdentitySourceIdentityCenterOutputReference.property.instanceArn">instanceArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessApplication.AccountaccessApplicationIdentitySourceIdentityCenterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.accountaccessApplication.AccountaccessApplicationIdentitySourceIdentityCenter">AccountaccessApplicationIdentitySourceIdentityCenter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.accountaccessApplication.AccountaccessApplicationIdentitySourceIdentityCenterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.accountaccessApplication.AccountaccessApplicationIdentitySourceIdentityCenterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `applicationArn`<sup>Required</sup> <a name="applicationArn" id="@cdktn/provider-aws.accountaccessApplication.AccountaccessApplicationIdentitySourceIdentityCenterOutputReference.property.applicationArn"></a>

```typescript
public readonly applicationArn: string;
```

- *Type:* string

---

##### `instanceArnInput`<sup>Optional</sup> <a name="instanceArnInput" id="@cdktn/provider-aws.accountaccessApplication.AccountaccessApplicationIdentitySourceIdentityCenterOutputReference.property.instanceArnInput"></a>

```typescript
public readonly instanceArnInput: string;
```

- *Type:* string

---

##### `instanceArn`<sup>Required</sup> <a name="instanceArn" id="@cdktn/provider-aws.accountaccessApplication.AccountaccessApplicationIdentitySourceIdentityCenterOutputReference.property.instanceArn"></a>

```typescript
public readonly instanceArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.accountaccessApplication.AccountaccessApplicationIdentitySourceIdentityCenterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AccountaccessApplicationIdentitySourceIdentityCenter;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.accountaccessApplication.AccountaccessApplicationIdentitySourceIdentityCenter">AccountaccessApplicationIdentitySourceIdentityCenter</a>

---


### AccountaccessApplicationIdentitySourceList <a name="AccountaccessApplicationIdentitySourceList" id="@cdktn/provider-aws.accountaccessApplication.AccountaccessApplicationIdentitySourceList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.accountaccessApplication.AccountaccessApplicationIdentitySourceList.Initializer"></a>

```typescript
import { accountaccessApplication } from '@cdktn/provider-aws'

new accountaccessApplication.AccountaccessApplicationIdentitySourceList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.accountaccessApplication.AccountaccessApplicationIdentitySourceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.accountaccessApplication.AccountaccessApplicationIdentitySourceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.accountaccessApplication.AccountaccessApplicationIdentitySourceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.accountaccessApplication.AccountaccessApplicationIdentitySourceList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.accountaccessApplication.AccountaccessApplicationIdentitySourceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.accountaccessApplication.AccountaccessApplicationIdentitySourceList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.accountaccessApplication.AccountaccessApplicationIdentitySourceList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.accountaccessApplication.AccountaccessApplicationIdentitySourceList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessApplication.AccountaccessApplicationIdentitySourceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.accountaccessApplication.AccountaccessApplicationIdentitySourceList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.accountaccessApplication.AccountaccessApplicationIdentitySourceList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.accountaccessApplication.AccountaccessApplicationIdentitySourceList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.accountaccessApplication.AccountaccessApplicationIdentitySourceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.accountaccessApplication.AccountaccessApplicationIdentitySourceList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.accountaccessApplication.AccountaccessApplicationIdentitySourceList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.accountaccessApplication.AccountaccessApplicationIdentitySourceList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.accountaccessApplication.AccountaccessApplicationIdentitySourceList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.accountaccessApplication.AccountaccessApplicationIdentitySourceList.get"></a>

```typescript
public get(index: number): AccountaccessApplicationIdentitySourceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.accountaccessApplication.AccountaccessApplicationIdentitySourceList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.accountaccessApplication.AccountaccessApplicationIdentitySourceList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.accountaccessApplication.AccountaccessApplicationIdentitySourceList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessApplication.AccountaccessApplicationIdentitySourceList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.accountaccessApplication.AccountaccessApplicationIdentitySource">AccountaccessApplicationIdentitySource</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.accountaccessApplication.AccountaccessApplicationIdentitySourceList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.accountaccessApplication.AccountaccessApplicationIdentitySourceList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.accountaccessApplication.AccountaccessApplicationIdentitySourceList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AccountaccessApplicationIdentitySource[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.accountaccessApplication.AccountaccessApplicationIdentitySource">AccountaccessApplicationIdentitySource</a>[]

---


### AccountaccessApplicationIdentitySourceOutputReference <a name="AccountaccessApplicationIdentitySourceOutputReference" id="@cdktn/provider-aws.accountaccessApplication.AccountaccessApplicationIdentitySourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.accountaccessApplication.AccountaccessApplicationIdentitySourceOutputReference.Initializer"></a>

```typescript
import { accountaccessApplication } from '@cdktn/provider-aws'

new accountaccessApplication.AccountaccessApplicationIdentitySourceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.accountaccessApplication.AccountaccessApplicationIdentitySourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.accountaccessApplication.AccountaccessApplicationIdentitySourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.accountaccessApplication.AccountaccessApplicationIdentitySourceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.accountaccessApplication.AccountaccessApplicationIdentitySourceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.accountaccessApplication.AccountaccessApplicationIdentitySourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.accountaccessApplication.AccountaccessApplicationIdentitySourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.accountaccessApplication.AccountaccessApplicationIdentitySourceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.accountaccessApplication.AccountaccessApplicationIdentitySourceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.accountaccessApplication.AccountaccessApplicationIdentitySourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessApplication.AccountaccessApplicationIdentitySourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessApplication.AccountaccessApplicationIdentitySourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessApplication.AccountaccessApplicationIdentitySourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessApplication.AccountaccessApplicationIdentitySourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessApplication.AccountaccessApplicationIdentitySourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessApplication.AccountaccessApplicationIdentitySourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessApplication.AccountaccessApplicationIdentitySourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessApplication.AccountaccessApplicationIdentitySourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessApplication.AccountaccessApplicationIdentitySourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessApplication.AccountaccessApplicationIdentitySourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessApplication.AccountaccessApplicationIdentitySourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.accountaccessApplication.AccountaccessApplicationIdentitySourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.accountaccessApplication.AccountaccessApplicationIdentitySourceOutputReference.putIdentityCenter">putIdentityCenter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessApplication.AccountaccessApplicationIdentitySourceOutputReference.resetIdentityCenter">resetIdentityCenter</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.accountaccessApplication.AccountaccessApplicationIdentitySourceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.accountaccessApplication.AccountaccessApplicationIdentitySourceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.accountaccessApplication.AccountaccessApplicationIdentitySourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.accountaccessApplication.AccountaccessApplicationIdentitySourceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.accountaccessApplication.AccountaccessApplicationIdentitySourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.accountaccessApplication.AccountaccessApplicationIdentitySourceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.accountaccessApplication.AccountaccessApplicationIdentitySourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.accountaccessApplication.AccountaccessApplicationIdentitySourceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.accountaccessApplication.AccountaccessApplicationIdentitySourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.accountaccessApplication.AccountaccessApplicationIdentitySourceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.accountaccessApplication.AccountaccessApplicationIdentitySourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.accountaccessApplication.AccountaccessApplicationIdentitySourceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.accountaccessApplication.AccountaccessApplicationIdentitySourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.accountaccessApplication.AccountaccessApplicationIdentitySourceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.accountaccessApplication.AccountaccessApplicationIdentitySourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.accountaccessApplication.AccountaccessApplicationIdentitySourceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.accountaccessApplication.AccountaccessApplicationIdentitySourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.accountaccessApplication.AccountaccessApplicationIdentitySourceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.accountaccessApplication.AccountaccessApplicationIdentitySourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.accountaccessApplication.AccountaccessApplicationIdentitySourceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.accountaccessApplication.AccountaccessApplicationIdentitySourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.accountaccessApplication.AccountaccessApplicationIdentitySourceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.accountaccessApplication.AccountaccessApplicationIdentitySourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.accountaccessApplication.AccountaccessApplicationIdentitySourceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putIdentityCenter` <a name="putIdentityCenter" id="@cdktn/provider-aws.accountaccessApplication.AccountaccessApplicationIdentitySourceOutputReference.putIdentityCenter"></a>

```typescript
public putIdentityCenter(value: IResolvable | AccountaccessApplicationIdentitySourceIdentityCenter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.accountaccessApplication.AccountaccessApplicationIdentitySourceOutputReference.putIdentityCenter.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.accountaccessApplication.AccountaccessApplicationIdentitySourceIdentityCenter">AccountaccessApplicationIdentitySourceIdentityCenter</a>[]

---

##### `resetIdentityCenter` <a name="resetIdentityCenter" id="@cdktn/provider-aws.accountaccessApplication.AccountaccessApplicationIdentitySourceOutputReference.resetIdentityCenter"></a>

```typescript
public resetIdentityCenter(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.accountaccessApplication.AccountaccessApplicationIdentitySourceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.accountaccessApplication.AccountaccessApplicationIdentitySourceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessApplication.AccountaccessApplicationIdentitySourceOutputReference.property.identityCenter">identityCenter</a></code> | <code><a href="#@cdktn/provider-aws.accountaccessApplication.AccountaccessApplicationIdentitySourceIdentityCenterList">AccountaccessApplicationIdentitySourceIdentityCenterList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessApplication.AccountaccessApplicationIdentitySourceOutputReference.property.identityCenterInput">identityCenterInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.accountaccessApplication.AccountaccessApplicationIdentitySourceIdentityCenter">AccountaccessApplicationIdentitySourceIdentityCenter</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessApplication.AccountaccessApplicationIdentitySourceOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.accountaccessApplication.AccountaccessApplicationIdentitySource">AccountaccessApplicationIdentitySource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.accountaccessApplication.AccountaccessApplicationIdentitySourceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.accountaccessApplication.AccountaccessApplicationIdentitySourceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `identityCenter`<sup>Required</sup> <a name="identityCenter" id="@cdktn/provider-aws.accountaccessApplication.AccountaccessApplicationIdentitySourceOutputReference.property.identityCenter"></a>

```typescript
public readonly identityCenter: AccountaccessApplicationIdentitySourceIdentityCenterList;
```

- *Type:* <a href="#@cdktn/provider-aws.accountaccessApplication.AccountaccessApplicationIdentitySourceIdentityCenterList">AccountaccessApplicationIdentitySourceIdentityCenterList</a>

---

##### `identityCenterInput`<sup>Optional</sup> <a name="identityCenterInput" id="@cdktn/provider-aws.accountaccessApplication.AccountaccessApplicationIdentitySourceOutputReference.property.identityCenterInput"></a>

```typescript
public readonly identityCenterInput: IResolvable | AccountaccessApplicationIdentitySourceIdentityCenter[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.accountaccessApplication.AccountaccessApplicationIdentitySourceIdentityCenter">AccountaccessApplicationIdentitySourceIdentityCenter</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.accountaccessApplication.AccountaccessApplicationIdentitySourceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AccountaccessApplicationIdentitySource;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.accountaccessApplication.AccountaccessApplicationIdentitySource">AccountaccessApplicationIdentitySource</a>

---


### AccountaccessApplicationTimeoutsOutputReference <a name="AccountaccessApplicationTimeoutsOutputReference" id="@cdktn/provider-aws.accountaccessApplication.AccountaccessApplicationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.accountaccessApplication.AccountaccessApplicationTimeoutsOutputReference.Initializer"></a>

```typescript
import { accountaccessApplication } from '@cdktn/provider-aws'

new accountaccessApplication.AccountaccessApplicationTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.accountaccessApplication.AccountaccessApplicationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.accountaccessApplication.AccountaccessApplicationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.accountaccessApplication.AccountaccessApplicationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.accountaccessApplication.AccountaccessApplicationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.accountaccessApplication.AccountaccessApplicationTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessApplication.AccountaccessApplicationTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessApplication.AccountaccessApplicationTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessApplication.AccountaccessApplicationTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessApplication.AccountaccessApplicationTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessApplication.AccountaccessApplicationTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessApplication.AccountaccessApplicationTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessApplication.AccountaccessApplicationTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessApplication.AccountaccessApplicationTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessApplication.AccountaccessApplicationTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessApplication.AccountaccessApplicationTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessApplication.AccountaccessApplicationTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.accountaccessApplication.AccountaccessApplicationTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.accountaccessApplication.AccountaccessApplicationTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessApplication.AccountaccessApplicationTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.accountaccessApplication.AccountaccessApplicationTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.accountaccessApplication.AccountaccessApplicationTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.accountaccessApplication.AccountaccessApplicationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.accountaccessApplication.AccountaccessApplicationTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.accountaccessApplication.AccountaccessApplicationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.accountaccessApplication.AccountaccessApplicationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.accountaccessApplication.AccountaccessApplicationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.accountaccessApplication.AccountaccessApplicationTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.accountaccessApplication.AccountaccessApplicationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.accountaccessApplication.AccountaccessApplicationTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.accountaccessApplication.AccountaccessApplicationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.accountaccessApplication.AccountaccessApplicationTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.accountaccessApplication.AccountaccessApplicationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.accountaccessApplication.AccountaccessApplicationTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.accountaccessApplication.AccountaccessApplicationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.accountaccessApplication.AccountaccessApplicationTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.accountaccessApplication.AccountaccessApplicationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.accountaccessApplication.AccountaccessApplicationTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.accountaccessApplication.AccountaccessApplicationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.accountaccessApplication.AccountaccessApplicationTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.accountaccessApplication.AccountaccessApplicationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.accountaccessApplication.AccountaccessApplicationTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.accountaccessApplication.AccountaccessApplicationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.accountaccessApplication.AccountaccessApplicationTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-aws.accountaccessApplication.AccountaccessApplicationTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-aws.accountaccessApplication.AccountaccessApplicationTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.accountaccessApplication.AccountaccessApplicationTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.accountaccessApplication.AccountaccessApplicationTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessApplication.AccountaccessApplicationTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessApplication.AccountaccessApplicationTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessApplication.AccountaccessApplicationTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessApplication.AccountaccessApplicationTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.accountaccessApplication.AccountaccessApplicationTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.accountaccessApplication.AccountaccessApplicationTimeouts">AccountaccessApplicationTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.accountaccessApplication.AccountaccessApplicationTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.accountaccessApplication.AccountaccessApplicationTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-aws.accountaccessApplication.AccountaccessApplicationTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-aws.accountaccessApplication.AccountaccessApplicationTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-aws.accountaccessApplication.AccountaccessApplicationTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-aws.accountaccessApplication.AccountaccessApplicationTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.accountaccessApplication.AccountaccessApplicationTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AccountaccessApplicationTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.accountaccessApplication.AccountaccessApplicationTimeouts">AccountaccessApplicationTimeouts</a>

---



