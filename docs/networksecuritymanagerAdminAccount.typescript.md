# `networksecuritymanagerAdminAccount` Submodule <a name="`networksecuritymanagerAdminAccount` Submodule" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetworksecuritymanagerAdminAccount <a name="NetworksecuritymanagerAdminAccount" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_admin_account aws_networksecuritymanager_admin_account}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.Initializer"></a>

```typescript
import { networksecuritymanagerAdminAccount } from '@cdktn/provider-aws'

new networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount(scope: Construct, id: string, config: NetworksecuritymanagerAdminAccountConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountConfig">NetworksecuritymanagerAdminAccountConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountConfig">NetworksecuritymanagerAdminAccountConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.putAdminScope">putAdminScope</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.resetAdminScope">resetAdminScope</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAdminScope` <a name="putAdminScope" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.putAdminScope"></a>

```typescript
public putAdminScope(value: IResolvable | NetworksecuritymanagerAdminAccountAdminScope[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.putAdminScope.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScope">NetworksecuritymanagerAdminAccountAdminScope</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.putTimeouts"></a>

```typescript
public putTimeouts(value: NetworksecuritymanagerAdminAccountTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeouts">NetworksecuritymanagerAdminAccountTimeouts</a>

---

##### `resetAdminScope` <a name="resetAdminScope" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.resetAdminScope"></a>

```typescript
public resetAdminScope(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.resetRegion"></a>

```typescript
public resetRegion(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a NetworksecuritymanagerAdminAccount resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.isConstruct"></a>

```typescript
import { networksecuritymanagerAdminAccount } from '@cdktn/provider-aws'

networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.isTerraformElement"></a>

```typescript
import { networksecuritymanagerAdminAccount } from '@cdktn/provider-aws'

networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.isTerraformResource"></a>

```typescript
import { networksecuritymanagerAdminAccount } from '@cdktn/provider-aws'

networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.generateConfigForImport"></a>

```typescript
import { networksecuritymanagerAdminAccount } from '@cdktn/provider-aws'

networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a NetworksecuritymanagerAdminAccount resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the NetworksecuritymanagerAdminAccount to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing NetworksecuritymanagerAdminAccount that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_admin_account#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the NetworksecuritymanagerAdminAccount to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.property.adminScope">adminScope</a></code> | <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeList">NetworksecuritymanagerAdminAccountAdminScopeList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeoutsOutputReference">NetworksecuritymanagerAdminAccountTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.property.accountIdInput">accountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.property.adminScopeInput">adminScopeInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScope">NetworksecuritymanagerAdminAccountAdminScope</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.property.priorityInput">priorityInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeouts">NetworksecuritymanagerAdminAccountTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.property.accountId">accountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.property.priority">priority</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.property.region">region</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `adminScope`<sup>Required</sup> <a name="adminScope" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.property.adminScope"></a>

```typescript
public readonly adminScope: NetworksecuritymanagerAdminAccountAdminScopeList;
```

- *Type:* <a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeList">NetworksecuritymanagerAdminAccountAdminScopeList</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.property.timeouts"></a>

```typescript
public readonly timeouts: NetworksecuritymanagerAdminAccountTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeoutsOutputReference">NetworksecuritymanagerAdminAccountTimeoutsOutputReference</a>

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.property.accountIdInput"></a>

```typescript
public readonly accountIdInput: string;
```

- *Type:* string

---

##### `adminScopeInput`<sup>Optional</sup> <a name="adminScopeInput" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.property.adminScopeInput"></a>

```typescript
public readonly adminScopeInput: IResolvable | NetworksecuritymanagerAdminAccountAdminScope[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScope">NetworksecuritymanagerAdminAccountAdminScope</a>[]

---

##### `priorityInput`<sup>Optional</sup> <a name="priorityInput" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.property.priorityInput"></a>

```typescript
public readonly priorityInput: number;
```

- *Type:* number

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | NetworksecuritymanagerAdminAccountTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeouts">NetworksecuritymanagerAdminAccountTimeouts</a>

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.property.priority"></a>

```typescript
public readonly priority: number;
```

- *Type:* number

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccount.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### NetworksecuritymanagerAdminAccountAdminScope <a name="NetworksecuritymanagerAdminAccountAdminScope" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScope"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScope.Initializer"></a>

```typescript
import { networksecuritymanagerAdminAccount } from '@cdktn/provider-aws'

const networksecuritymanagerAdminAccountAdminScope: networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScope = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScope.property.firewallTypeScope">firewallTypeScope</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScope">NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScope</a>[]</code> | firewall_type_scope block. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScope.property.scopeFilter">scopeFilter</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilter">NetworksecuritymanagerAdminAccountAdminScopeScopeFilter</a>[]</code> | scope_filter block. |

---

##### `firewallTypeScope`<sup>Optional</sup> <a name="firewallTypeScope" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScope.property.firewallTypeScope"></a>

```typescript
public readonly firewallTypeScope: IResolvable | NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScope[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScope">NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScope</a>[]

firewall_type_scope block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_admin_account#firewall_type_scope NetworksecuritymanagerAdminAccount#firewall_type_scope}

---

##### `scopeFilter`<sup>Optional</sup> <a name="scopeFilter" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScope.property.scopeFilter"></a>

```typescript
public readonly scopeFilter: IResolvable | NetworksecuritymanagerAdminAccountAdminScopeScopeFilter[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilter">NetworksecuritymanagerAdminAccountAdminScopeScopeFilter</a>[]

scope_filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_admin_account#scope_filter NetworksecuritymanagerAdminAccount#scope_filter}

---

### NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScope <a name="NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScope" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScope"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScope.Initializer"></a>

```typescript
import { networksecuritymanagerAdminAccount } from '@cdktn/provider-aws'

const networksecuritymanagerAdminAccountAdminScopeFirewallTypeScope: networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScope = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScope.property.allFirewallTypesEnabled">allFirewallTypesEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_admin_account#all_firewall_types_enabled NetworksecuritymanagerAdminAccount#all_firewall_types_enabled}. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScope.property.firewallTypes">firewallTypes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_admin_account#firewall_types NetworksecuritymanagerAdminAccount#firewall_types}. |

---

##### `allFirewallTypesEnabled`<sup>Optional</sup> <a name="allFirewallTypesEnabled" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScope.property.allFirewallTypesEnabled"></a>

```typescript
public readonly allFirewallTypesEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_admin_account#all_firewall_types_enabled NetworksecuritymanagerAdminAccount#all_firewall_types_enabled}.

---

##### `firewallTypes`<sup>Optional</sup> <a name="firewallTypes" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScope.property.firewallTypes"></a>

```typescript
public readonly firewallTypes: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_admin_account#firewall_types NetworksecuritymanagerAdminAccount#firewall_types}.

---

### NetworksecuritymanagerAdminAccountAdminScopeScopeFilter <a name="NetworksecuritymanagerAdminAccountAdminScopeScopeFilter" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilter.Initializer"></a>

```typescript
import { networksecuritymanagerAdminAccount } from '@cdktn/provider-aws'

const networksecuritymanagerAdminAccountAdminScopeScopeFilter: networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilter.property.excludeOnly">excludeOnly</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnly">NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnly</a>[]</code> | exclude_only block. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilter.property.includeAll">includeAll</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_admin_account#include_all NetworksecuritymanagerAdminAccount#include_all}. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilter.property.includeOnly">includeOnly</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnly">NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnly</a>[]</code> | include_only block. |

---

##### `excludeOnly`<sup>Optional</sup> <a name="excludeOnly" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilter.property.excludeOnly"></a>

```typescript
public readonly excludeOnly: IResolvable | NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnly[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnly">NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnly</a>[]

exclude_only block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_admin_account#exclude_only NetworksecuritymanagerAdminAccount#exclude_only}

---

##### `includeAll`<sup>Optional</sup> <a name="includeAll" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilter.property.includeAll"></a>

```typescript
public readonly includeAll: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_admin_account#include_all NetworksecuritymanagerAdminAccount#include_all}.

---

##### `includeOnly`<sup>Optional</sup> <a name="includeOnly" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilter.property.includeOnly"></a>

```typescript
public readonly includeOnly: IResolvable | NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnly[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnly">NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnly</a>[]

include_only block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_admin_account#include_only NetworksecuritymanagerAdminAccount#include_only}

---

### NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnly <a name="NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnly" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnly"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnly.Initializer"></a>

```typescript
import { networksecuritymanagerAdminAccount } from '@cdktn/provider-aws'

const networksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnly: networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnly = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnly.property.accounts">accounts</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_admin_account#accounts NetworksecuritymanagerAdminAccount#accounts}. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnly.property.organizationalUnits">organizationalUnits</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_admin_account#organizational_units NetworksecuritymanagerAdminAccount#organizational_units}. |

---

##### `accounts`<sup>Optional</sup> <a name="accounts" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnly.property.accounts"></a>

```typescript
public readonly accounts: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_admin_account#accounts NetworksecuritymanagerAdminAccount#accounts}.

---

##### `organizationalUnits`<sup>Optional</sup> <a name="organizationalUnits" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnly.property.organizationalUnits"></a>

```typescript
public readonly organizationalUnits: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_admin_account#organizational_units NetworksecuritymanagerAdminAccount#organizational_units}.

---

### NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnly <a name="NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnly" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnly"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnly.Initializer"></a>

```typescript
import { networksecuritymanagerAdminAccount } from '@cdktn/provider-aws'

const networksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnly: networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnly = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnly.property.accounts">accounts</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_admin_account#accounts NetworksecuritymanagerAdminAccount#accounts}. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnly.property.organizationalUnits">organizationalUnits</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_admin_account#organizational_units NetworksecuritymanagerAdminAccount#organizational_units}. |

---

##### `accounts`<sup>Optional</sup> <a name="accounts" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnly.property.accounts"></a>

```typescript
public readonly accounts: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_admin_account#accounts NetworksecuritymanagerAdminAccount#accounts}.

---

##### `organizationalUnits`<sup>Optional</sup> <a name="organizationalUnits" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnly.property.organizationalUnits"></a>

```typescript
public readonly organizationalUnits: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_admin_account#organizational_units NetworksecuritymanagerAdminAccount#organizational_units}.

---

### NetworksecuritymanagerAdminAccountConfig <a name="NetworksecuritymanagerAdminAccountConfig" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountConfig.Initializer"></a>

```typescript
import { networksecuritymanagerAdminAccount } from '@cdktn/provider-aws'

const networksecuritymanagerAdminAccountConfig: networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountConfig.property.accountId">accountId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_admin_account#account_id NetworksecuritymanagerAdminAccount#account_id}. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountConfig.property.priority">priority</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_admin_account#priority NetworksecuritymanagerAdminAccount#priority}. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountConfig.property.adminScope">adminScope</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScope">NetworksecuritymanagerAdminAccountAdminScope</a>[]</code> | admin_scope block. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountConfig.property.region">region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeouts">NetworksecuritymanagerAdminAccountTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountConfig.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_admin_account#account_id NetworksecuritymanagerAdminAccount#account_id}.

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountConfig.property.priority"></a>

```typescript
public readonly priority: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_admin_account#priority NetworksecuritymanagerAdminAccount#priority}.

---

##### `adminScope`<sup>Optional</sup> <a name="adminScope" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountConfig.property.adminScope"></a>

```typescript
public readonly adminScope: IResolvable | NetworksecuritymanagerAdminAccountAdminScope[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScope">NetworksecuritymanagerAdminAccountAdminScope</a>[]

admin_scope block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_admin_account#admin_scope NetworksecuritymanagerAdminAccount#admin_scope}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_admin_account#region NetworksecuritymanagerAdminAccount#region}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountConfig.property.timeouts"></a>

```typescript
public readonly timeouts: NetworksecuritymanagerAdminAccountTimeouts;
```

- *Type:* <a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeouts">NetworksecuritymanagerAdminAccountTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_admin_account#timeouts NetworksecuritymanagerAdminAccount#timeouts}

---

### NetworksecuritymanagerAdminAccountTimeouts <a name="NetworksecuritymanagerAdminAccountTimeouts" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeouts.Initializer"></a>

```typescript
import { networksecuritymanagerAdminAccount } from '@cdktn/provider-aws'

const networksecuritymanagerAdminAccountTimeouts: networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeouts.property.create">create</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeouts.property.delete">delete</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeouts.property.update">update</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_admin_account#create NetworksecuritymanagerAdminAccount#create}

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_admin_account#delete NetworksecuritymanagerAdminAccount#delete}

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.73.0/docs/resources/networksecuritymanager_admin_account#update NetworksecuritymanagerAdminAccount#update}

---

## Classes <a name="Classes" id="Classes"></a>

### NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeList <a name="NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeList" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeList.Initializer"></a>

```typescript
import { networksecuritymanagerAdminAccount } from '@cdktn/provider-aws'

new networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeList.get"></a>

```typescript
public get(index: number): NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScope">NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScope</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScope[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScope">NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScope</a>[]

---


### NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeOutputReference <a name="NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeOutputReference" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeOutputReference.Initializer"></a>

```typescript
import { networksecuritymanagerAdminAccount } from '@cdktn/provider-aws'

new networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeOutputReference.resetAllFirewallTypesEnabled">resetAllFirewallTypesEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeOutputReference.resetFirewallTypes">resetFirewallTypes</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAllFirewallTypesEnabled` <a name="resetAllFirewallTypesEnabled" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeOutputReference.resetAllFirewallTypesEnabled"></a>

```typescript
public resetAllFirewallTypesEnabled(): void
```

##### `resetFirewallTypes` <a name="resetFirewallTypes" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeOutputReference.resetFirewallTypes"></a>

```typescript
public resetFirewallTypes(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeOutputReference.property.allFirewallTypesEnabledInput">allFirewallTypesEnabledInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeOutputReference.property.firewallTypesInput">firewallTypesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeOutputReference.property.allFirewallTypesEnabled">allFirewallTypesEnabled</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeOutputReference.property.firewallTypes">firewallTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScope">NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScope</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `allFirewallTypesEnabledInput`<sup>Optional</sup> <a name="allFirewallTypesEnabledInput" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeOutputReference.property.allFirewallTypesEnabledInput"></a>

```typescript
public readonly allFirewallTypesEnabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `firewallTypesInput`<sup>Optional</sup> <a name="firewallTypesInput" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeOutputReference.property.firewallTypesInput"></a>

```typescript
public readonly firewallTypesInput: string[];
```

- *Type:* string[]

---

##### `allFirewallTypesEnabled`<sup>Required</sup> <a name="allFirewallTypesEnabled" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeOutputReference.property.allFirewallTypesEnabled"></a>

```typescript
public readonly allFirewallTypesEnabled: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `firewallTypes`<sup>Required</sup> <a name="firewallTypes" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeOutputReference.property.firewallTypes"></a>

```typescript
public readonly firewallTypes: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScope;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScope">NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScope</a>

---


### NetworksecuritymanagerAdminAccountAdminScopeList <a name="NetworksecuritymanagerAdminAccountAdminScopeList" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeList.Initializer"></a>

```typescript
import { networksecuritymanagerAdminAccount } from '@cdktn/provider-aws'

new networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeList.get"></a>

```typescript
public get(index: number): NetworksecuritymanagerAdminAccountAdminScopeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScope">NetworksecuritymanagerAdminAccountAdminScope</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | NetworksecuritymanagerAdminAccountAdminScope[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScope">NetworksecuritymanagerAdminAccountAdminScope</a>[]

---


### NetworksecuritymanagerAdminAccountAdminScopeOutputReference <a name="NetworksecuritymanagerAdminAccountAdminScopeOutputReference" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeOutputReference.Initializer"></a>

```typescript
import { networksecuritymanagerAdminAccount } from '@cdktn/provider-aws'

new networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeOutputReference.putFirewallTypeScope">putFirewallTypeScope</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeOutputReference.putScopeFilter">putScopeFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeOutputReference.resetFirewallTypeScope">resetFirewallTypeScope</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeOutputReference.resetScopeFilter">resetScopeFilter</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putFirewallTypeScope` <a name="putFirewallTypeScope" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeOutputReference.putFirewallTypeScope"></a>

```typescript
public putFirewallTypeScope(value: IResolvable | NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScope[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeOutputReference.putFirewallTypeScope.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScope">NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScope</a>[]

---

##### `putScopeFilter` <a name="putScopeFilter" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeOutputReference.putScopeFilter"></a>

```typescript
public putScopeFilter(value: IResolvable | NetworksecuritymanagerAdminAccountAdminScopeScopeFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeOutputReference.putScopeFilter.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilter">NetworksecuritymanagerAdminAccountAdminScopeScopeFilter</a>[]

---

##### `resetFirewallTypeScope` <a name="resetFirewallTypeScope" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeOutputReference.resetFirewallTypeScope"></a>

```typescript
public resetFirewallTypeScope(): void
```

##### `resetScopeFilter` <a name="resetScopeFilter" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeOutputReference.resetScopeFilter"></a>

```typescript
public resetScopeFilter(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeOutputReference.property.firewallTypeScope">firewallTypeScope</a></code> | <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeList">NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeOutputReference.property.scopeFilter">scopeFilter</a></code> | <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterList">NetworksecuritymanagerAdminAccountAdminScopeScopeFilterList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeOutputReference.property.firewallTypeScopeInput">firewallTypeScopeInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScope">NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScope</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeOutputReference.property.scopeFilterInput">scopeFilterInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilter">NetworksecuritymanagerAdminAccountAdminScopeScopeFilter</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScope">NetworksecuritymanagerAdminAccountAdminScope</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `firewallTypeScope`<sup>Required</sup> <a name="firewallTypeScope" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeOutputReference.property.firewallTypeScope"></a>

```typescript
public readonly firewallTypeScope: NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeList;
```

- *Type:* <a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeList">NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScopeList</a>

---

##### `scopeFilter`<sup>Required</sup> <a name="scopeFilter" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeOutputReference.property.scopeFilter"></a>

```typescript
public readonly scopeFilter: NetworksecuritymanagerAdminAccountAdminScopeScopeFilterList;
```

- *Type:* <a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterList">NetworksecuritymanagerAdminAccountAdminScopeScopeFilterList</a>

---

##### `firewallTypeScopeInput`<sup>Optional</sup> <a name="firewallTypeScopeInput" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeOutputReference.property.firewallTypeScopeInput"></a>

```typescript
public readonly firewallTypeScopeInput: IResolvable | NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScope[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScope">NetworksecuritymanagerAdminAccountAdminScopeFirewallTypeScope</a>[]

---

##### `scopeFilterInput`<sup>Optional</sup> <a name="scopeFilterInput" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeOutputReference.property.scopeFilterInput"></a>

```typescript
public readonly scopeFilterInput: IResolvable | NetworksecuritymanagerAdminAccountAdminScopeScopeFilter[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilter">NetworksecuritymanagerAdminAccountAdminScopeScopeFilter</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | NetworksecuritymanagerAdminAccountAdminScope;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScope">NetworksecuritymanagerAdminAccountAdminScope</a>

---


### NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyList <a name="NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyList" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyList.Initializer"></a>

```typescript
import { networksecuritymanagerAdminAccount } from '@cdktn/provider-aws'

new networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyList.get"></a>

```typescript
public get(index: number): NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnly">NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnly</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnly[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnly">NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnly</a>[]

---


### NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyOutputReference <a name="NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyOutputReference" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyOutputReference.Initializer"></a>

```typescript
import { networksecuritymanagerAdminAccount } from '@cdktn/provider-aws'

new networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyOutputReference.resetAccounts">resetAccounts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyOutputReference.resetOrganizationalUnits">resetOrganizationalUnits</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAccounts` <a name="resetAccounts" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyOutputReference.resetAccounts"></a>

```typescript
public resetAccounts(): void
```

##### `resetOrganizationalUnits` <a name="resetOrganizationalUnits" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyOutputReference.resetOrganizationalUnits"></a>

```typescript
public resetOrganizationalUnits(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyOutputReference.property.accountsInput">accountsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyOutputReference.property.organizationalUnitsInput">organizationalUnitsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyOutputReference.property.accounts">accounts</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyOutputReference.property.organizationalUnits">organizationalUnits</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnly">NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnly</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `accountsInput`<sup>Optional</sup> <a name="accountsInput" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyOutputReference.property.accountsInput"></a>

```typescript
public readonly accountsInput: string[];
```

- *Type:* string[]

---

##### `organizationalUnitsInput`<sup>Optional</sup> <a name="organizationalUnitsInput" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyOutputReference.property.organizationalUnitsInput"></a>

```typescript
public readonly organizationalUnitsInput: string[];
```

- *Type:* string[]

---

##### `accounts`<sup>Required</sup> <a name="accounts" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyOutputReference.property.accounts"></a>

```typescript
public readonly accounts: string[];
```

- *Type:* string[]

---

##### `organizationalUnits`<sup>Required</sup> <a name="organizationalUnits" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyOutputReference.property.organizationalUnits"></a>

```typescript
public readonly organizationalUnits: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnly;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnly">NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnly</a>

---


### NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyList <a name="NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyList" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyList.Initializer"></a>

```typescript
import { networksecuritymanagerAdminAccount } from '@cdktn/provider-aws'

new networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyList.get"></a>

```typescript
public get(index: number): NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnly">NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnly</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnly[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnly">NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnly</a>[]

---


### NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyOutputReference <a name="NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyOutputReference" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyOutputReference.Initializer"></a>

```typescript
import { networksecuritymanagerAdminAccount } from '@cdktn/provider-aws'

new networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyOutputReference.resetAccounts">resetAccounts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyOutputReference.resetOrganizationalUnits">resetOrganizationalUnits</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAccounts` <a name="resetAccounts" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyOutputReference.resetAccounts"></a>

```typescript
public resetAccounts(): void
```

##### `resetOrganizationalUnits` <a name="resetOrganizationalUnits" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyOutputReference.resetOrganizationalUnits"></a>

```typescript
public resetOrganizationalUnits(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyOutputReference.property.accountsInput">accountsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyOutputReference.property.organizationalUnitsInput">organizationalUnitsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyOutputReference.property.accounts">accounts</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyOutputReference.property.organizationalUnits">organizationalUnits</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnly">NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnly</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `accountsInput`<sup>Optional</sup> <a name="accountsInput" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyOutputReference.property.accountsInput"></a>

```typescript
public readonly accountsInput: string[];
```

- *Type:* string[]

---

##### `organizationalUnitsInput`<sup>Optional</sup> <a name="organizationalUnitsInput" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyOutputReference.property.organizationalUnitsInput"></a>

```typescript
public readonly organizationalUnitsInput: string[];
```

- *Type:* string[]

---

##### `accounts`<sup>Required</sup> <a name="accounts" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyOutputReference.property.accounts"></a>

```typescript
public readonly accounts: string[];
```

- *Type:* string[]

---

##### `organizationalUnits`<sup>Required</sup> <a name="organizationalUnits" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyOutputReference.property.organizationalUnits"></a>

```typescript
public readonly organizationalUnits: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnly;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnly">NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnly</a>

---


### NetworksecuritymanagerAdminAccountAdminScopeScopeFilterList <a name="NetworksecuritymanagerAdminAccountAdminScopeScopeFilterList" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterList.Initializer"></a>

```typescript
import { networksecuritymanagerAdminAccount } from '@cdktn/provider-aws'

new networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterList.get"></a>

```typescript
public get(index: number): NetworksecuritymanagerAdminAccountAdminScopeScopeFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilter">NetworksecuritymanagerAdminAccountAdminScopeScopeFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | NetworksecuritymanagerAdminAccountAdminScopeScopeFilter[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilter">NetworksecuritymanagerAdminAccountAdminScopeScopeFilter</a>[]

---


### NetworksecuritymanagerAdminAccountAdminScopeScopeFilterOutputReference <a name="NetworksecuritymanagerAdminAccountAdminScopeScopeFilterOutputReference" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterOutputReference.Initializer"></a>

```typescript
import { networksecuritymanagerAdminAccount } from '@cdktn/provider-aws'

new networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterOutputReference.putExcludeOnly">putExcludeOnly</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterOutputReference.putIncludeOnly">putIncludeOnly</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterOutputReference.resetExcludeOnly">resetExcludeOnly</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterOutputReference.resetIncludeAll">resetIncludeAll</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterOutputReference.resetIncludeOnly">resetIncludeOnly</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putExcludeOnly` <a name="putExcludeOnly" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterOutputReference.putExcludeOnly"></a>

```typescript
public putExcludeOnly(value: IResolvable | NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnly[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterOutputReference.putExcludeOnly.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnly">NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnly</a>[]

---

##### `putIncludeOnly` <a name="putIncludeOnly" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterOutputReference.putIncludeOnly"></a>

```typescript
public putIncludeOnly(value: IResolvable | NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnly[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterOutputReference.putIncludeOnly.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnly">NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnly</a>[]

---

##### `resetExcludeOnly` <a name="resetExcludeOnly" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterOutputReference.resetExcludeOnly"></a>

```typescript
public resetExcludeOnly(): void
```

##### `resetIncludeAll` <a name="resetIncludeAll" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterOutputReference.resetIncludeAll"></a>

```typescript
public resetIncludeAll(): void
```

##### `resetIncludeOnly` <a name="resetIncludeOnly" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterOutputReference.resetIncludeOnly"></a>

```typescript
public resetIncludeOnly(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterOutputReference.property.excludeOnly">excludeOnly</a></code> | <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyList">NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterOutputReference.property.includeOnly">includeOnly</a></code> | <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyList">NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterOutputReference.property.excludeOnlyInput">excludeOnlyInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnly">NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnly</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterOutputReference.property.includeAllInput">includeAllInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterOutputReference.property.includeOnlyInput">includeOnlyInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnly">NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnly</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterOutputReference.property.includeAll">includeAll</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilter">NetworksecuritymanagerAdminAccountAdminScopeScopeFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `excludeOnly`<sup>Required</sup> <a name="excludeOnly" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterOutputReference.property.excludeOnly"></a>

```typescript
public readonly excludeOnly: NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyList;
```

- *Type:* <a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyList">NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnlyList</a>

---

##### `includeOnly`<sup>Required</sup> <a name="includeOnly" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterOutputReference.property.includeOnly"></a>

```typescript
public readonly includeOnly: NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyList;
```

- *Type:* <a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyList">NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnlyList</a>

---

##### `excludeOnlyInput`<sup>Optional</sup> <a name="excludeOnlyInput" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterOutputReference.property.excludeOnlyInput"></a>

```typescript
public readonly excludeOnlyInput: IResolvable | NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnly[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnly">NetworksecuritymanagerAdminAccountAdminScopeScopeFilterExcludeOnly</a>[]

---

##### `includeAllInput`<sup>Optional</sup> <a name="includeAllInput" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterOutputReference.property.includeAllInput"></a>

```typescript
public readonly includeAllInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `includeOnlyInput`<sup>Optional</sup> <a name="includeOnlyInput" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterOutputReference.property.includeOnlyInput"></a>

```typescript
public readonly includeOnlyInput: IResolvable | NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnly[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnly">NetworksecuritymanagerAdminAccountAdminScopeScopeFilterIncludeOnly</a>[]

---

##### `includeAll`<sup>Required</sup> <a name="includeAll" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterOutputReference.property.includeAll"></a>

```typescript
public readonly includeAll: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | NetworksecuritymanagerAdminAccountAdminScopeScopeFilter;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountAdminScopeScopeFilter">NetworksecuritymanagerAdminAccountAdminScopeScopeFilter</a>

---


### NetworksecuritymanagerAdminAccountTimeoutsOutputReference <a name="NetworksecuritymanagerAdminAccountTimeoutsOutputReference" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeoutsOutputReference.Initializer"></a>

```typescript
import { networksecuritymanagerAdminAccount } from '@cdktn/provider-aws'

new networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeouts">NetworksecuritymanagerAdminAccountTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | NetworksecuritymanagerAdminAccountTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.networksecuritymanagerAdminAccount.NetworksecuritymanagerAdminAccountTimeouts">NetworksecuritymanagerAdminAccountTimeouts</a>

---



