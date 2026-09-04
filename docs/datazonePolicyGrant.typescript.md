# `datazonePolicyGrant` Submodule <a name="`datazonePolicyGrant` Submodule" id="@cdktn/provider-aws.datazonePolicyGrant"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatazonePolicyGrant <a name="DatazonePolicyGrant" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/datazone_policy_grant aws_datazone_policy_grant}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.Initializer"></a>

```typescript
import { datazonePolicyGrant } from '@cdktn/provider-aws'

new datazonePolicyGrant.DatazonePolicyGrant(scope: Construct, id: string, config: DatazonePolicyGrantConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantConfig">DatazonePolicyGrantConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantConfig">DatazonePolicyGrantConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.putDetail">putDetail</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.putPrincipal">putPrincipal</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.resetDetail">resetDetail</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.resetPrincipal">resetPrincipal</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.resetRegion">resetRegion</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putDetail` <a name="putDetail" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.putDetail"></a>

```typescript
public putDetail(value: IResolvable | DatazonePolicyGrantDetail[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.putDetail.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetail">DatazonePolicyGrantDetail</a>[]

---

##### `putPrincipal` <a name="putPrincipal" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.putPrincipal"></a>

```typescript
public putPrincipal(value: IResolvable | DatazonePolicyGrantPrincipal[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.putPrincipal.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipal">DatazonePolicyGrantPrincipal</a>[]

---

##### `resetDetail` <a name="resetDetail" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.resetDetail"></a>

```typescript
public resetDetail(): void
```

##### `resetPrincipal` <a name="resetPrincipal" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.resetPrincipal"></a>

```typescript
public resetPrincipal(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.resetRegion"></a>

```typescript
public resetRegion(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DatazonePolicyGrant resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.isConstruct"></a>

```typescript
import { datazonePolicyGrant } from '@cdktn/provider-aws'

datazonePolicyGrant.DatazonePolicyGrant.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.isTerraformElement"></a>

```typescript
import { datazonePolicyGrant } from '@cdktn/provider-aws'

datazonePolicyGrant.DatazonePolicyGrant.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.isTerraformResource"></a>

```typescript
import { datazonePolicyGrant } from '@cdktn/provider-aws'

datazonePolicyGrant.DatazonePolicyGrant.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.generateConfigForImport"></a>

```typescript
import { datazonePolicyGrant } from '@cdktn/provider-aws'

datazonePolicyGrant.DatazonePolicyGrant.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DatazonePolicyGrant resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DatazonePolicyGrant to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DatazonePolicyGrant that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/datazone_policy_grant#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DatazonePolicyGrant to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.property.createdAt">createdAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.property.createdBy">createdBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.property.detail">detail</a></code> | <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailList">DatazonePolicyGrantDetailList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.property.grantId">grantId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.property.principal">principal</a></code> | <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalList">DatazonePolicyGrantPrincipalList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.property.detailInput">detailInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetail">DatazonePolicyGrantDetail</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.property.domainIdentifierInput">domainIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.property.entityIdentifierInput">entityIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.property.entityTypeInput">entityTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.property.policyTypeInput">policyTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.property.principalInput">principalInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipal">DatazonePolicyGrantPrincipal</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.property.domainIdentifier">domainIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.property.entityIdentifier">entityIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.property.entityType">entityType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.property.policyType">policyType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.property.region">region</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.property.createdAt"></a>

```typescript
public readonly createdAt: string;
```

- *Type:* string

---

##### `createdBy`<sup>Required</sup> <a name="createdBy" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.property.createdBy"></a>

```typescript
public readonly createdBy: string;
```

- *Type:* string

---

##### `detail`<sup>Required</sup> <a name="detail" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.property.detail"></a>

```typescript
public readonly detail: DatazonePolicyGrantDetailList;
```

- *Type:* <a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailList">DatazonePolicyGrantDetailList</a>

---

##### `grantId`<sup>Required</sup> <a name="grantId" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.property.grantId"></a>

```typescript
public readonly grantId: string;
```

- *Type:* string

---

##### `principal`<sup>Required</sup> <a name="principal" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.property.principal"></a>

```typescript
public readonly principal: DatazonePolicyGrantPrincipalList;
```

- *Type:* <a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalList">DatazonePolicyGrantPrincipalList</a>

---

##### `detailInput`<sup>Optional</sup> <a name="detailInput" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.property.detailInput"></a>

```typescript
public readonly detailInput: IResolvable | DatazonePolicyGrantDetail[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetail">DatazonePolicyGrantDetail</a>[]

---

##### `domainIdentifierInput`<sup>Optional</sup> <a name="domainIdentifierInput" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.property.domainIdentifierInput"></a>

```typescript
public readonly domainIdentifierInput: string;
```

- *Type:* string

---

##### `entityIdentifierInput`<sup>Optional</sup> <a name="entityIdentifierInput" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.property.entityIdentifierInput"></a>

```typescript
public readonly entityIdentifierInput: string;
```

- *Type:* string

---

##### `entityTypeInput`<sup>Optional</sup> <a name="entityTypeInput" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.property.entityTypeInput"></a>

```typescript
public readonly entityTypeInput: string;
```

- *Type:* string

---

##### `policyTypeInput`<sup>Optional</sup> <a name="policyTypeInput" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.property.policyTypeInput"></a>

```typescript
public readonly policyTypeInput: string;
```

- *Type:* string

---

##### `principalInput`<sup>Optional</sup> <a name="principalInput" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.property.principalInput"></a>

```typescript
public readonly principalInput: IResolvable | DatazonePolicyGrantPrincipal[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipal">DatazonePolicyGrantPrincipal</a>[]

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `domainIdentifier`<sup>Required</sup> <a name="domainIdentifier" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.property.domainIdentifier"></a>

```typescript
public readonly domainIdentifier: string;
```

- *Type:* string

---

##### `entityIdentifier`<sup>Required</sup> <a name="entityIdentifier" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.property.entityIdentifier"></a>

```typescript
public readonly entityIdentifier: string;
```

- *Type:* string

---

##### `entityType`<sup>Required</sup> <a name="entityType" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.property.entityType"></a>

```typescript
public readonly entityType: string;
```

- *Type:* string

---

##### `policyType`<sup>Required</sup> <a name="policyType" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.property.policyType"></a>

```typescript
public readonly policyType: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrant.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DatazonePolicyGrantConfig <a name="DatazonePolicyGrantConfig" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantConfig.Initializer"></a>

```typescript
import { datazonePolicyGrant } from '@cdktn/provider-aws'

const datazonePolicyGrantConfig: datazonePolicyGrant.DatazonePolicyGrantConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantConfig.property.domainIdentifier">domainIdentifier</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/datazone_policy_grant#domain_identifier DatazonePolicyGrant#domain_identifier}. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantConfig.property.entityIdentifier">entityIdentifier</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/datazone_policy_grant#entity_identifier DatazonePolicyGrant#entity_identifier}. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantConfig.property.entityType">entityType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/datazone_policy_grant#entity_type DatazonePolicyGrant#entity_type}. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantConfig.property.policyType">policyType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/datazone_policy_grant#policy_type DatazonePolicyGrant#policy_type}. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantConfig.property.detail">detail</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetail">DatazonePolicyGrantDetail</a>[]</code> | detail block. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantConfig.property.principal">principal</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipal">DatazonePolicyGrantPrincipal</a>[]</code> | principal block. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantConfig.property.region">region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `domainIdentifier`<sup>Required</sup> <a name="domainIdentifier" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantConfig.property.domainIdentifier"></a>

```typescript
public readonly domainIdentifier: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/datazone_policy_grant#domain_identifier DatazonePolicyGrant#domain_identifier}.

---

##### `entityIdentifier`<sup>Required</sup> <a name="entityIdentifier" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantConfig.property.entityIdentifier"></a>

```typescript
public readonly entityIdentifier: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/datazone_policy_grant#entity_identifier DatazonePolicyGrant#entity_identifier}.

---

##### `entityType`<sup>Required</sup> <a name="entityType" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantConfig.property.entityType"></a>

```typescript
public readonly entityType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/datazone_policy_grant#entity_type DatazonePolicyGrant#entity_type}.

---

##### `policyType`<sup>Required</sup> <a name="policyType" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantConfig.property.policyType"></a>

```typescript
public readonly policyType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/datazone_policy_grant#policy_type DatazonePolicyGrant#policy_type}.

---

##### `detail`<sup>Optional</sup> <a name="detail" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantConfig.property.detail"></a>

```typescript
public readonly detail: IResolvable | DatazonePolicyGrantDetail[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetail">DatazonePolicyGrantDetail</a>[]

detail block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/datazone_policy_grant#detail DatazonePolicyGrant#detail}

---

##### `principal`<sup>Optional</sup> <a name="principal" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantConfig.property.principal"></a>

```typescript
public readonly principal: IResolvable | DatazonePolicyGrantPrincipal[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipal">DatazonePolicyGrantPrincipal</a>[]

principal block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/datazone_policy_grant#principal DatazonePolicyGrant#principal}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/datazone_policy_grant#region DatazonePolicyGrant#region}

---

### DatazonePolicyGrantDetail <a name="DatazonePolicyGrantDetail" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetail"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetail.Initializer"></a>

```typescript
import { datazonePolicyGrant } from '@cdktn/provider-aws'

const datazonePolicyGrantDetail: datazonePolicyGrant.DatazonePolicyGrantDetail = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetail.property.addToProjectMemberPool">addToProjectMemberPool</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPool">DatazonePolicyGrantDetailAddToProjectMemberPool</a>[]</code> | add_to_project_member_pool block. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetail.property.createAssetType">createAssetType</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetType">DatazonePolicyGrantDetailCreateAssetType</a>[]</code> | create_asset_type block. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetail.property.createDomainUnit">createDomainUnit</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnit">DatazonePolicyGrantDetailCreateDomainUnit</a>[]</code> | create_domain_unit block. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetail.property.createEnvironment">createEnvironment</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironment">DatazonePolicyGrantDetailCreateEnvironment</a>[]</code> | create_environment block. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetail.property.createEnvironmentFromBlueprint">createEnvironmentFromBlueprint</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentFromBlueprint">DatazonePolicyGrantDetailCreateEnvironmentFromBlueprint</a>[]</code> | create_environment_from_blueprint block. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetail.property.createEnvironmentProfile">createEnvironmentProfile</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfile">DatazonePolicyGrantDetailCreateEnvironmentProfile</a>[]</code> | create_environment_profile block. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetail.property.createFormType">createFormType</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormType">DatazonePolicyGrantDetailCreateFormType</a>[]</code> | create_form_type block. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetail.property.createGlossary">createGlossary</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossary">DatazonePolicyGrantDetailCreateGlossary</a>[]</code> | create_glossary block. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetail.property.createProject">createProject</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProject">DatazonePolicyGrantDetailCreateProject</a>[]</code> | create_project block. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetail.property.createProjectFromProjectProfile">createProjectFromProjectProfile</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfile">DatazonePolicyGrantDetailCreateProjectFromProjectProfile</a>[]</code> | create_project_from_project_profile block. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetail.property.delegateCreateEnvironmentProfile">delegateCreateEnvironmentProfile</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailDelegateCreateEnvironmentProfile">DatazonePolicyGrantDetailDelegateCreateEnvironmentProfile</a>[]</code> | delegate_create_environment_profile block. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetail.property.overrideDomainUnitOwners">overrideDomainUnitOwners</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwners">DatazonePolicyGrantDetailOverrideDomainUnitOwners</a>[]</code> | override_domain_unit_owners block. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetail.property.overrideProjectOwners">overrideProjectOwners</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwners">DatazonePolicyGrantDetailOverrideProjectOwners</a>[]</code> | override_project_owners block. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetail.property.useAssetType">useAssetType</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailUseAssetType">DatazonePolicyGrantDetailUseAssetType</a>[]</code> | use_asset_type block. |

---

##### `addToProjectMemberPool`<sup>Optional</sup> <a name="addToProjectMemberPool" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetail.property.addToProjectMemberPool"></a>

```typescript
public readonly addToProjectMemberPool: IResolvable | DatazonePolicyGrantDetailAddToProjectMemberPool[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPool">DatazonePolicyGrantDetailAddToProjectMemberPool</a>[]

add_to_project_member_pool block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/datazone_policy_grant#add_to_project_member_pool DatazonePolicyGrant#add_to_project_member_pool}

---

##### `createAssetType`<sup>Optional</sup> <a name="createAssetType" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetail.property.createAssetType"></a>

```typescript
public readonly createAssetType: IResolvable | DatazonePolicyGrantDetailCreateAssetType[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetType">DatazonePolicyGrantDetailCreateAssetType</a>[]

create_asset_type block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/datazone_policy_grant#create_asset_type DatazonePolicyGrant#create_asset_type}

---

##### `createDomainUnit`<sup>Optional</sup> <a name="createDomainUnit" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetail.property.createDomainUnit"></a>

```typescript
public readonly createDomainUnit: IResolvable | DatazonePolicyGrantDetailCreateDomainUnit[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnit">DatazonePolicyGrantDetailCreateDomainUnit</a>[]

create_domain_unit block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/datazone_policy_grant#create_domain_unit DatazonePolicyGrant#create_domain_unit}

---

##### `createEnvironment`<sup>Optional</sup> <a name="createEnvironment" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetail.property.createEnvironment"></a>

```typescript
public readonly createEnvironment: IResolvable | DatazonePolicyGrantDetailCreateEnvironment[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironment">DatazonePolicyGrantDetailCreateEnvironment</a>[]

create_environment block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/datazone_policy_grant#create_environment DatazonePolicyGrant#create_environment}

---

##### `createEnvironmentFromBlueprint`<sup>Optional</sup> <a name="createEnvironmentFromBlueprint" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetail.property.createEnvironmentFromBlueprint"></a>

```typescript
public readonly createEnvironmentFromBlueprint: IResolvable | DatazonePolicyGrantDetailCreateEnvironmentFromBlueprint[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentFromBlueprint">DatazonePolicyGrantDetailCreateEnvironmentFromBlueprint</a>[]

create_environment_from_blueprint block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/datazone_policy_grant#create_environment_from_blueprint DatazonePolicyGrant#create_environment_from_blueprint}

---

##### `createEnvironmentProfile`<sup>Optional</sup> <a name="createEnvironmentProfile" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetail.property.createEnvironmentProfile"></a>

```typescript
public readonly createEnvironmentProfile: IResolvable | DatazonePolicyGrantDetailCreateEnvironmentProfile[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfile">DatazonePolicyGrantDetailCreateEnvironmentProfile</a>[]

create_environment_profile block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/datazone_policy_grant#create_environment_profile DatazonePolicyGrant#create_environment_profile}

---

##### `createFormType`<sup>Optional</sup> <a name="createFormType" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetail.property.createFormType"></a>

```typescript
public readonly createFormType: IResolvable | DatazonePolicyGrantDetailCreateFormType[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormType">DatazonePolicyGrantDetailCreateFormType</a>[]

create_form_type block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/datazone_policy_grant#create_form_type DatazonePolicyGrant#create_form_type}

---

##### `createGlossary`<sup>Optional</sup> <a name="createGlossary" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetail.property.createGlossary"></a>

```typescript
public readonly createGlossary: IResolvable | DatazonePolicyGrantDetailCreateGlossary[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossary">DatazonePolicyGrantDetailCreateGlossary</a>[]

create_glossary block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/datazone_policy_grant#create_glossary DatazonePolicyGrant#create_glossary}

---

##### `createProject`<sup>Optional</sup> <a name="createProject" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetail.property.createProject"></a>

```typescript
public readonly createProject: IResolvable | DatazonePolicyGrantDetailCreateProject[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProject">DatazonePolicyGrantDetailCreateProject</a>[]

create_project block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/datazone_policy_grant#create_project DatazonePolicyGrant#create_project}

---

##### `createProjectFromProjectProfile`<sup>Optional</sup> <a name="createProjectFromProjectProfile" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetail.property.createProjectFromProjectProfile"></a>

```typescript
public readonly createProjectFromProjectProfile: IResolvable | DatazonePolicyGrantDetailCreateProjectFromProjectProfile[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfile">DatazonePolicyGrantDetailCreateProjectFromProjectProfile</a>[]

create_project_from_project_profile block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/datazone_policy_grant#create_project_from_project_profile DatazonePolicyGrant#create_project_from_project_profile}

---

##### `delegateCreateEnvironmentProfile`<sup>Optional</sup> <a name="delegateCreateEnvironmentProfile" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetail.property.delegateCreateEnvironmentProfile"></a>

```typescript
public readonly delegateCreateEnvironmentProfile: IResolvable | DatazonePolicyGrantDetailDelegateCreateEnvironmentProfile[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailDelegateCreateEnvironmentProfile">DatazonePolicyGrantDetailDelegateCreateEnvironmentProfile</a>[]

delegate_create_environment_profile block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/datazone_policy_grant#delegate_create_environment_profile DatazonePolicyGrant#delegate_create_environment_profile}

---

##### `overrideDomainUnitOwners`<sup>Optional</sup> <a name="overrideDomainUnitOwners" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetail.property.overrideDomainUnitOwners"></a>

```typescript
public readonly overrideDomainUnitOwners: IResolvable | DatazonePolicyGrantDetailOverrideDomainUnitOwners[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwners">DatazonePolicyGrantDetailOverrideDomainUnitOwners</a>[]

override_domain_unit_owners block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/datazone_policy_grant#override_domain_unit_owners DatazonePolicyGrant#override_domain_unit_owners}

---

##### `overrideProjectOwners`<sup>Optional</sup> <a name="overrideProjectOwners" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetail.property.overrideProjectOwners"></a>

```typescript
public readonly overrideProjectOwners: IResolvable | DatazonePolicyGrantDetailOverrideProjectOwners[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwners">DatazonePolicyGrantDetailOverrideProjectOwners</a>[]

override_project_owners block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/datazone_policy_grant#override_project_owners DatazonePolicyGrant#override_project_owners}

---

##### `useAssetType`<sup>Optional</sup> <a name="useAssetType" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetail.property.useAssetType"></a>

```typescript
public readonly useAssetType: IResolvable | DatazonePolicyGrantDetailUseAssetType[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailUseAssetType">DatazonePolicyGrantDetailUseAssetType</a>[]

use_asset_type block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/datazone_policy_grant#use_asset_type DatazonePolicyGrant#use_asset_type}

---

### DatazonePolicyGrantDetailAddToProjectMemberPool <a name="DatazonePolicyGrantDetailAddToProjectMemberPool" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPool"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPool.Initializer"></a>

```typescript
import { datazonePolicyGrant } from '@cdktn/provider-aws'

const datazonePolicyGrantDetailAddToProjectMemberPool: datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPool = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPool.property.includeChildDomainUnits">includeChildDomainUnits</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/datazone_policy_grant#include_child_domain_units DatazonePolicyGrant#include_child_domain_units}. |

---

##### `includeChildDomainUnits`<sup>Optional</sup> <a name="includeChildDomainUnits" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPool.property.includeChildDomainUnits"></a>

```typescript
public readonly includeChildDomainUnits: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/datazone_policy_grant#include_child_domain_units DatazonePolicyGrant#include_child_domain_units}.

---

### DatazonePolicyGrantDetailCreateAssetType <a name="DatazonePolicyGrantDetailCreateAssetType" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetType"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetType.Initializer"></a>

```typescript
import { datazonePolicyGrant } from '@cdktn/provider-aws'

const datazonePolicyGrantDetailCreateAssetType: datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetType = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetType.property.includeChildDomainUnits">includeChildDomainUnits</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/datazone_policy_grant#include_child_domain_units DatazonePolicyGrant#include_child_domain_units}. |

---

##### `includeChildDomainUnits`<sup>Optional</sup> <a name="includeChildDomainUnits" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetType.property.includeChildDomainUnits"></a>

```typescript
public readonly includeChildDomainUnits: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/datazone_policy_grant#include_child_domain_units DatazonePolicyGrant#include_child_domain_units}.

---

### DatazonePolicyGrantDetailCreateDomainUnit <a name="DatazonePolicyGrantDetailCreateDomainUnit" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnit"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnit.Initializer"></a>

```typescript
import { datazonePolicyGrant } from '@cdktn/provider-aws'

const datazonePolicyGrantDetailCreateDomainUnit: datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnit = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnit.property.includeChildDomainUnits">includeChildDomainUnits</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/datazone_policy_grant#include_child_domain_units DatazonePolicyGrant#include_child_domain_units}. |

---

##### `includeChildDomainUnits`<sup>Optional</sup> <a name="includeChildDomainUnits" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnit.property.includeChildDomainUnits"></a>

```typescript
public readonly includeChildDomainUnits: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/datazone_policy_grant#include_child_domain_units DatazonePolicyGrant#include_child_domain_units}.

---

### DatazonePolicyGrantDetailCreateEnvironment <a name="DatazonePolicyGrantDetailCreateEnvironment" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironment"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironment.Initializer"></a>

```typescript
import { datazonePolicyGrant } from '@cdktn/provider-aws'

const datazonePolicyGrantDetailCreateEnvironment: datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironment = { ... }
```


### DatazonePolicyGrantDetailCreateEnvironmentFromBlueprint <a name="DatazonePolicyGrantDetailCreateEnvironmentFromBlueprint" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentFromBlueprint"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentFromBlueprint.Initializer"></a>

```typescript
import { datazonePolicyGrant } from '@cdktn/provider-aws'

const datazonePolicyGrantDetailCreateEnvironmentFromBlueprint: datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentFromBlueprint = { ... }
```


### DatazonePolicyGrantDetailCreateEnvironmentProfile <a name="DatazonePolicyGrantDetailCreateEnvironmentProfile" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfile"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfile.Initializer"></a>

```typescript
import { datazonePolicyGrant } from '@cdktn/provider-aws'

const datazonePolicyGrantDetailCreateEnvironmentProfile: datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfile = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfile.property.domainUnitId">domainUnitId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/datazone_policy_grant#domain_unit_id DatazonePolicyGrant#domain_unit_id}. |

---

##### `domainUnitId`<sup>Optional</sup> <a name="domainUnitId" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfile.property.domainUnitId"></a>

```typescript
public readonly domainUnitId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/datazone_policy_grant#domain_unit_id DatazonePolicyGrant#domain_unit_id}.

---

### DatazonePolicyGrantDetailCreateFormType <a name="DatazonePolicyGrantDetailCreateFormType" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormType"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormType.Initializer"></a>

```typescript
import { datazonePolicyGrant } from '@cdktn/provider-aws'

const datazonePolicyGrantDetailCreateFormType: datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormType = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormType.property.includeChildDomainUnits">includeChildDomainUnits</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/datazone_policy_grant#include_child_domain_units DatazonePolicyGrant#include_child_domain_units}. |

---

##### `includeChildDomainUnits`<sup>Optional</sup> <a name="includeChildDomainUnits" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormType.property.includeChildDomainUnits"></a>

```typescript
public readonly includeChildDomainUnits: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/datazone_policy_grant#include_child_domain_units DatazonePolicyGrant#include_child_domain_units}.

---

### DatazonePolicyGrantDetailCreateGlossary <a name="DatazonePolicyGrantDetailCreateGlossary" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossary"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossary.Initializer"></a>

```typescript
import { datazonePolicyGrant } from '@cdktn/provider-aws'

const datazonePolicyGrantDetailCreateGlossary: datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossary = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossary.property.includeChildDomainUnits">includeChildDomainUnits</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/datazone_policy_grant#include_child_domain_units DatazonePolicyGrant#include_child_domain_units}. |

---

##### `includeChildDomainUnits`<sup>Optional</sup> <a name="includeChildDomainUnits" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossary.property.includeChildDomainUnits"></a>

```typescript
public readonly includeChildDomainUnits: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/datazone_policy_grant#include_child_domain_units DatazonePolicyGrant#include_child_domain_units}.

---

### DatazonePolicyGrantDetailCreateProject <a name="DatazonePolicyGrantDetailCreateProject" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProject"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProject.Initializer"></a>

```typescript
import { datazonePolicyGrant } from '@cdktn/provider-aws'

const datazonePolicyGrantDetailCreateProject: datazonePolicyGrant.DatazonePolicyGrantDetailCreateProject = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProject.property.includeChildDomainUnits">includeChildDomainUnits</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/datazone_policy_grant#include_child_domain_units DatazonePolicyGrant#include_child_domain_units}. |

---

##### `includeChildDomainUnits`<sup>Optional</sup> <a name="includeChildDomainUnits" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProject.property.includeChildDomainUnits"></a>

```typescript
public readonly includeChildDomainUnits: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/datazone_policy_grant#include_child_domain_units DatazonePolicyGrant#include_child_domain_units}.

---

### DatazonePolicyGrantDetailCreateProjectFromProjectProfile <a name="DatazonePolicyGrantDetailCreateProjectFromProjectProfile" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfile"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfile.Initializer"></a>

```typescript
import { datazonePolicyGrant } from '@cdktn/provider-aws'

const datazonePolicyGrantDetailCreateProjectFromProjectProfile: datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfile = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfile.property.includeChildDomainUnits">includeChildDomainUnits</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/datazone_policy_grant#include_child_domain_units DatazonePolicyGrant#include_child_domain_units}. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfile.property.projectProfiles">projectProfiles</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/datazone_policy_grant#project_profiles DatazonePolicyGrant#project_profiles}. |

---

##### `includeChildDomainUnits`<sup>Optional</sup> <a name="includeChildDomainUnits" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfile.property.includeChildDomainUnits"></a>

```typescript
public readonly includeChildDomainUnits: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/datazone_policy_grant#include_child_domain_units DatazonePolicyGrant#include_child_domain_units}.

---

##### `projectProfiles`<sup>Optional</sup> <a name="projectProfiles" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfile.property.projectProfiles"></a>

```typescript
public readonly projectProfiles: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/datazone_policy_grant#project_profiles DatazonePolicyGrant#project_profiles}.

---

### DatazonePolicyGrantDetailDelegateCreateEnvironmentProfile <a name="DatazonePolicyGrantDetailDelegateCreateEnvironmentProfile" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailDelegateCreateEnvironmentProfile"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailDelegateCreateEnvironmentProfile.Initializer"></a>

```typescript
import { datazonePolicyGrant } from '@cdktn/provider-aws'

const datazonePolicyGrantDetailDelegateCreateEnvironmentProfile: datazonePolicyGrant.DatazonePolicyGrantDetailDelegateCreateEnvironmentProfile = { ... }
```


### DatazonePolicyGrantDetailOverrideDomainUnitOwners <a name="DatazonePolicyGrantDetailOverrideDomainUnitOwners" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwners"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwners.Initializer"></a>

```typescript
import { datazonePolicyGrant } from '@cdktn/provider-aws'

const datazonePolicyGrantDetailOverrideDomainUnitOwners: datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwners = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwners.property.includeChildDomainUnits">includeChildDomainUnits</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/datazone_policy_grant#include_child_domain_units DatazonePolicyGrant#include_child_domain_units}. |

---

##### `includeChildDomainUnits`<sup>Optional</sup> <a name="includeChildDomainUnits" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwners.property.includeChildDomainUnits"></a>

```typescript
public readonly includeChildDomainUnits: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/datazone_policy_grant#include_child_domain_units DatazonePolicyGrant#include_child_domain_units}.

---

### DatazonePolicyGrantDetailOverrideProjectOwners <a name="DatazonePolicyGrantDetailOverrideProjectOwners" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwners"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwners.Initializer"></a>

```typescript
import { datazonePolicyGrant } from '@cdktn/provider-aws'

const datazonePolicyGrantDetailOverrideProjectOwners: datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwners = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwners.property.includeChildDomainUnits">includeChildDomainUnits</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/datazone_policy_grant#include_child_domain_units DatazonePolicyGrant#include_child_domain_units}. |

---

##### `includeChildDomainUnits`<sup>Optional</sup> <a name="includeChildDomainUnits" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwners.property.includeChildDomainUnits"></a>

```typescript
public readonly includeChildDomainUnits: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/datazone_policy_grant#include_child_domain_units DatazonePolicyGrant#include_child_domain_units}.

---

### DatazonePolicyGrantDetailUseAssetType <a name="DatazonePolicyGrantDetailUseAssetType" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailUseAssetType"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailUseAssetType.Initializer"></a>

```typescript
import { datazonePolicyGrant } from '@cdktn/provider-aws'

const datazonePolicyGrantDetailUseAssetType: datazonePolicyGrant.DatazonePolicyGrantDetailUseAssetType = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailUseAssetType.property.domainUnitId">domainUnitId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/datazone_policy_grant#domain_unit_id DatazonePolicyGrant#domain_unit_id}. |

---

##### `domainUnitId`<sup>Optional</sup> <a name="domainUnitId" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailUseAssetType.property.domainUnitId"></a>

```typescript
public readonly domainUnitId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/datazone_policy_grant#domain_unit_id DatazonePolicyGrant#domain_unit_id}.

---

### DatazonePolicyGrantPrincipal <a name="DatazonePolicyGrantPrincipal" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipal"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipal.Initializer"></a>

```typescript
import { datazonePolicyGrant } from '@cdktn/provider-aws'

const datazonePolicyGrantPrincipal: datazonePolicyGrant.DatazonePolicyGrantPrincipal = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipal.property.domainUnit">domainUnit</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnit">DatazonePolicyGrantPrincipalDomainUnit</a>[]</code> | domain_unit block. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipal.property.group">group</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroup">DatazonePolicyGrantPrincipalGroup</a>[]</code> | group block. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipal.property.project">project</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProject">DatazonePolicyGrantPrincipalProject</a>[]</code> | project block. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipal.property.user">user</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUser">DatazonePolicyGrantPrincipalUser</a>[]</code> | user block. |

---

##### `domainUnit`<sup>Optional</sup> <a name="domainUnit" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipal.property.domainUnit"></a>

```typescript
public readonly domainUnit: IResolvable | DatazonePolicyGrantPrincipalDomainUnit[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnit">DatazonePolicyGrantPrincipalDomainUnit</a>[]

domain_unit block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/datazone_policy_grant#domain_unit DatazonePolicyGrant#domain_unit}

---

##### `group`<sup>Optional</sup> <a name="group" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipal.property.group"></a>

```typescript
public readonly group: IResolvable | DatazonePolicyGrantPrincipalGroup[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroup">DatazonePolicyGrantPrincipalGroup</a>[]

group block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/datazone_policy_grant#group DatazonePolicyGrant#group}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipal.property.project"></a>

```typescript
public readonly project: IResolvable | DatazonePolicyGrantPrincipalProject[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProject">DatazonePolicyGrantPrincipalProject</a>[]

project block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/datazone_policy_grant#project DatazonePolicyGrant#project}

---

##### `user`<sup>Optional</sup> <a name="user" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipal.property.user"></a>

```typescript
public readonly user: IResolvable | DatazonePolicyGrantPrincipalUser[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUser">DatazonePolicyGrantPrincipalUser</a>[]

user block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/datazone_policy_grant#user DatazonePolicyGrant#user}

---

### DatazonePolicyGrantPrincipalDomainUnit <a name="DatazonePolicyGrantPrincipalDomainUnit" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnit"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnit.Initializer"></a>

```typescript
import { datazonePolicyGrant } from '@cdktn/provider-aws'

const datazonePolicyGrantPrincipalDomainUnit: datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnit = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnit.property.domainUnitDesignation">domainUnitDesignation</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/datazone_policy_grant#domain_unit_designation DatazonePolicyGrant#domain_unit_designation}. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnit.property.allDomainUnitsGrantFilter">allDomainUnitsGrantFilter</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitAllDomainUnitsGrantFilter">DatazonePolicyGrantPrincipalDomainUnitAllDomainUnitsGrantFilter</a>[]</code> | all_domain_units_grant_filter block. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnit.property.domainUnitIdentifier">domainUnitIdentifier</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/datazone_policy_grant#domain_unit_identifier DatazonePolicyGrant#domain_unit_identifier}. |

---

##### `domainUnitDesignation`<sup>Required</sup> <a name="domainUnitDesignation" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnit.property.domainUnitDesignation"></a>

```typescript
public readonly domainUnitDesignation: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/datazone_policy_grant#domain_unit_designation DatazonePolicyGrant#domain_unit_designation}.

---

##### `allDomainUnitsGrantFilter`<sup>Optional</sup> <a name="allDomainUnitsGrantFilter" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnit.property.allDomainUnitsGrantFilter"></a>

```typescript
public readonly allDomainUnitsGrantFilter: IResolvable | DatazonePolicyGrantPrincipalDomainUnitAllDomainUnitsGrantFilter[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitAllDomainUnitsGrantFilter">DatazonePolicyGrantPrincipalDomainUnitAllDomainUnitsGrantFilter</a>[]

all_domain_units_grant_filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/datazone_policy_grant#all_domain_units_grant_filter DatazonePolicyGrant#all_domain_units_grant_filter}

---

##### `domainUnitIdentifier`<sup>Optional</sup> <a name="domainUnitIdentifier" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnit.property.domainUnitIdentifier"></a>

```typescript
public readonly domainUnitIdentifier: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/datazone_policy_grant#domain_unit_identifier DatazonePolicyGrant#domain_unit_identifier}.

---

### DatazonePolicyGrantPrincipalDomainUnitAllDomainUnitsGrantFilter <a name="DatazonePolicyGrantPrincipalDomainUnitAllDomainUnitsGrantFilter" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitAllDomainUnitsGrantFilter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitAllDomainUnitsGrantFilter.Initializer"></a>

```typescript
import { datazonePolicyGrant } from '@cdktn/provider-aws'

const datazonePolicyGrantPrincipalDomainUnitAllDomainUnitsGrantFilter: datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitAllDomainUnitsGrantFilter = { ... }
```


### DatazonePolicyGrantPrincipalGroup <a name="DatazonePolicyGrantPrincipalGroup" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroup"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroup.Initializer"></a>

```typescript
import { datazonePolicyGrant } from '@cdktn/provider-aws'

const datazonePolicyGrantPrincipalGroup: datazonePolicyGrant.DatazonePolicyGrantPrincipalGroup = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroup.property.groupIdentifier">groupIdentifier</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/datazone_policy_grant#group_identifier DatazonePolicyGrant#group_identifier}. |

---

##### `groupIdentifier`<sup>Required</sup> <a name="groupIdentifier" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroup.property.groupIdentifier"></a>

```typescript
public readonly groupIdentifier: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/datazone_policy_grant#group_identifier DatazonePolicyGrant#group_identifier}.

---

### DatazonePolicyGrantPrincipalProject <a name="DatazonePolicyGrantPrincipalProject" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProject"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProject.Initializer"></a>

```typescript
import { datazonePolicyGrant } from '@cdktn/provider-aws'

const datazonePolicyGrantPrincipalProject: datazonePolicyGrant.DatazonePolicyGrantPrincipalProject = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProject.property.projectDesignation">projectDesignation</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/datazone_policy_grant#project_designation DatazonePolicyGrant#project_designation}. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProject.property.domainUnitFilter">domainUnitFilter</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectDomainUnitFilter">DatazonePolicyGrantPrincipalProjectDomainUnitFilter</a>[]</code> | domain_unit_filter block. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProject.property.projectIdentifier">projectIdentifier</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/datazone_policy_grant#project_identifier DatazonePolicyGrant#project_identifier}. |

---

##### `projectDesignation`<sup>Required</sup> <a name="projectDesignation" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProject.property.projectDesignation"></a>

```typescript
public readonly projectDesignation: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/datazone_policy_grant#project_designation DatazonePolicyGrant#project_designation}.

---

##### `domainUnitFilter`<sup>Optional</sup> <a name="domainUnitFilter" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProject.property.domainUnitFilter"></a>

```typescript
public readonly domainUnitFilter: IResolvable | DatazonePolicyGrantPrincipalProjectDomainUnitFilter[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectDomainUnitFilter">DatazonePolicyGrantPrincipalProjectDomainUnitFilter</a>[]

domain_unit_filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/datazone_policy_grant#domain_unit_filter DatazonePolicyGrant#domain_unit_filter}

---

##### `projectIdentifier`<sup>Optional</sup> <a name="projectIdentifier" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProject.property.projectIdentifier"></a>

```typescript
public readonly projectIdentifier: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/datazone_policy_grant#project_identifier DatazonePolicyGrant#project_identifier}.

---

### DatazonePolicyGrantPrincipalProjectDomainUnitFilter <a name="DatazonePolicyGrantPrincipalProjectDomainUnitFilter" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectDomainUnitFilter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectDomainUnitFilter.Initializer"></a>

```typescript
import { datazonePolicyGrant } from '@cdktn/provider-aws'

const datazonePolicyGrantPrincipalProjectDomainUnitFilter: datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectDomainUnitFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectDomainUnitFilter.property.domainUnit">domainUnit</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/datazone_policy_grant#domain_unit DatazonePolicyGrant#domain_unit}. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectDomainUnitFilter.property.includeChildDomainUnits">includeChildDomainUnits</a></code> | <code>boolean \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/datazone_policy_grant#include_child_domain_units DatazonePolicyGrant#include_child_domain_units}. |

---

##### `domainUnit`<sup>Required</sup> <a name="domainUnit" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectDomainUnitFilter.property.domainUnit"></a>

```typescript
public readonly domainUnit: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/datazone_policy_grant#domain_unit DatazonePolicyGrant#domain_unit}.

---

##### `includeChildDomainUnits`<sup>Optional</sup> <a name="includeChildDomainUnits" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectDomainUnitFilter.property.includeChildDomainUnits"></a>

```typescript
public readonly includeChildDomainUnits: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/datazone_policy_grant#include_child_domain_units DatazonePolicyGrant#include_child_domain_units}.

---

### DatazonePolicyGrantPrincipalUser <a name="DatazonePolicyGrantPrincipalUser" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUser"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUser.Initializer"></a>

```typescript
import { datazonePolicyGrant } from '@cdktn/provider-aws'

const datazonePolicyGrantPrincipalUser: datazonePolicyGrant.DatazonePolicyGrantPrincipalUser = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUser.property.allUsersGrantFilter">allUsersGrantFilter</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserAllUsersGrantFilter">DatazonePolicyGrantPrincipalUserAllUsersGrantFilter</a>[]</code> | all_users_grant_filter block. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUser.property.userIdentifier">userIdentifier</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/datazone_policy_grant#user_identifier DatazonePolicyGrant#user_identifier}. |

---

##### `allUsersGrantFilter`<sup>Optional</sup> <a name="allUsersGrantFilter" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUser.property.allUsersGrantFilter"></a>

```typescript
public readonly allUsersGrantFilter: IResolvable | DatazonePolicyGrantPrincipalUserAllUsersGrantFilter[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserAllUsersGrantFilter">DatazonePolicyGrantPrincipalUserAllUsersGrantFilter</a>[]

all_users_grant_filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/datazone_policy_grant#all_users_grant_filter DatazonePolicyGrant#all_users_grant_filter}

---

##### `userIdentifier`<sup>Optional</sup> <a name="userIdentifier" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUser.property.userIdentifier"></a>

```typescript
public readonly userIdentifier: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/datazone_policy_grant#user_identifier DatazonePolicyGrant#user_identifier}.

---

### DatazonePolicyGrantPrincipalUserAllUsersGrantFilter <a name="DatazonePolicyGrantPrincipalUserAllUsersGrantFilter" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserAllUsersGrantFilter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserAllUsersGrantFilter.Initializer"></a>

```typescript
import { datazonePolicyGrant } from '@cdktn/provider-aws'

const datazonePolicyGrantPrincipalUserAllUsersGrantFilter: datazonePolicyGrant.DatazonePolicyGrantPrincipalUserAllUsersGrantFilter = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DatazonePolicyGrantDetailAddToProjectMemberPoolList <a name="DatazonePolicyGrantDetailAddToProjectMemberPoolList" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPoolList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPoolList.Initializer"></a>

```typescript
import { datazonePolicyGrant } from '@cdktn/provider-aws'

new datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPoolList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPoolList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPoolList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPoolList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPoolList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPoolList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPoolList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPoolList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPoolList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPoolList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPoolList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPoolList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPoolList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPoolList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPoolList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPoolList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPoolList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPoolList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPoolList.get"></a>

```typescript
public get(index: number): DatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPoolList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPoolList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPoolList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPoolList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPool">DatazonePolicyGrantDetailAddToProjectMemberPool</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPoolList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPoolList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPoolList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DatazonePolicyGrantDetailAddToProjectMemberPool[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPool">DatazonePolicyGrantDetailAddToProjectMemberPool</a>[]

---


### DatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference <a name="DatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference.Initializer"></a>

```typescript
import { datazonePolicyGrant } from '@cdktn/provider-aws'

new datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference.resetIncludeChildDomainUnits">resetIncludeChildDomainUnits</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIncludeChildDomainUnits` <a name="resetIncludeChildDomainUnits" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference.resetIncludeChildDomainUnits"></a>

```typescript
public resetIncludeChildDomainUnits(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference.property.includeChildDomainUnitsInput">includeChildDomainUnitsInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference.property.includeChildDomainUnits">includeChildDomainUnits</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPool">DatazonePolicyGrantDetailAddToProjectMemberPool</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `includeChildDomainUnitsInput`<sup>Optional</sup> <a name="includeChildDomainUnitsInput" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference.property.includeChildDomainUnitsInput"></a>

```typescript
public readonly includeChildDomainUnitsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `includeChildDomainUnits`<sup>Required</sup> <a name="includeChildDomainUnits" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference.property.includeChildDomainUnits"></a>

```typescript
public readonly includeChildDomainUnits: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPoolOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DatazonePolicyGrantDetailAddToProjectMemberPool;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPool">DatazonePolicyGrantDetailAddToProjectMemberPool</a>

---


### DatazonePolicyGrantDetailCreateAssetTypeList <a name="DatazonePolicyGrantDetailCreateAssetTypeList" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetTypeList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetTypeList.Initializer"></a>

```typescript
import { datazonePolicyGrant } from '@cdktn/provider-aws'

new datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetTypeList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetTypeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetTypeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetTypeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetTypeList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetTypeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetTypeList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetTypeList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetTypeList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetTypeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetTypeList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetTypeList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetTypeList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetTypeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetTypeList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetTypeList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetTypeList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetTypeList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetTypeList.get"></a>

```typescript
public get(index: number): DatazonePolicyGrantDetailCreateAssetTypeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetTypeList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetTypeList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetTypeList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetTypeList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetType">DatazonePolicyGrantDetailCreateAssetType</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetTypeList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetTypeList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetTypeList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DatazonePolicyGrantDetailCreateAssetType[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetType">DatazonePolicyGrantDetailCreateAssetType</a>[]

---


### DatazonePolicyGrantDetailCreateAssetTypeOutputReference <a name="DatazonePolicyGrantDetailCreateAssetTypeOutputReference" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetTypeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetTypeOutputReference.Initializer"></a>

```typescript
import { datazonePolicyGrant } from '@cdktn/provider-aws'

new datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetTypeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetTypeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetTypeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetTypeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetTypeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetTypeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetTypeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetTypeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetTypeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetTypeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetTypeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetTypeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetTypeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetTypeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetTypeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetTypeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetTypeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetTypeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetTypeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetTypeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetTypeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetTypeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetTypeOutputReference.resetIncludeChildDomainUnits">resetIncludeChildDomainUnits</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetTypeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetTypeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetTypeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetTypeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetTypeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetTypeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetTypeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetTypeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetTypeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetTypeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetTypeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetTypeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetTypeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetTypeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetTypeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetTypeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetTypeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetTypeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetTypeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetTypeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetTypeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetTypeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetTypeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetTypeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIncludeChildDomainUnits` <a name="resetIncludeChildDomainUnits" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetTypeOutputReference.resetIncludeChildDomainUnits"></a>

```typescript
public resetIncludeChildDomainUnits(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetTypeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetTypeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetTypeOutputReference.property.includeChildDomainUnitsInput">includeChildDomainUnitsInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetTypeOutputReference.property.includeChildDomainUnits">includeChildDomainUnits</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetTypeOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetType">DatazonePolicyGrantDetailCreateAssetType</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetTypeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetTypeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `includeChildDomainUnitsInput`<sup>Optional</sup> <a name="includeChildDomainUnitsInput" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetTypeOutputReference.property.includeChildDomainUnitsInput"></a>

```typescript
public readonly includeChildDomainUnitsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `includeChildDomainUnits`<sup>Required</sup> <a name="includeChildDomainUnits" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetTypeOutputReference.property.includeChildDomainUnits"></a>

```typescript
public readonly includeChildDomainUnits: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetTypeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DatazonePolicyGrantDetailCreateAssetType;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetType">DatazonePolicyGrantDetailCreateAssetType</a>

---


### DatazonePolicyGrantDetailCreateDomainUnitList <a name="DatazonePolicyGrantDetailCreateDomainUnitList" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnitList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnitList.Initializer"></a>

```typescript
import { datazonePolicyGrant } from '@cdktn/provider-aws'

new datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnitList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnitList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnitList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnitList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnitList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnitList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnitList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnitList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnitList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnitList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnitList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnitList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnitList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnitList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnitList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnitList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnitList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnitList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnitList.get"></a>

```typescript
public get(index: number): DatazonePolicyGrantDetailCreateDomainUnitOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnitList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnitList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnitList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnitList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnit">DatazonePolicyGrantDetailCreateDomainUnit</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnitList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnitList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnitList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DatazonePolicyGrantDetailCreateDomainUnit[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnit">DatazonePolicyGrantDetailCreateDomainUnit</a>[]

---


### DatazonePolicyGrantDetailCreateDomainUnitOutputReference <a name="DatazonePolicyGrantDetailCreateDomainUnitOutputReference" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnitOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnitOutputReference.Initializer"></a>

```typescript
import { datazonePolicyGrant } from '@cdktn/provider-aws'

new datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnitOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnitOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnitOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnitOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnitOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnitOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnitOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnitOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnitOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnitOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnitOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnitOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnitOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnitOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnitOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnitOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnitOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnitOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnitOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnitOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnitOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnitOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnitOutputReference.resetIncludeChildDomainUnits">resetIncludeChildDomainUnits</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnitOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnitOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnitOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnitOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnitOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnitOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnitOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnitOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnitOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnitOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnitOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnitOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnitOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnitOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnitOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnitOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnitOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnitOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnitOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnitOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnitOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnitOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnitOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnitOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIncludeChildDomainUnits` <a name="resetIncludeChildDomainUnits" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnitOutputReference.resetIncludeChildDomainUnits"></a>

```typescript
public resetIncludeChildDomainUnits(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnitOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnitOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnitOutputReference.property.includeChildDomainUnitsInput">includeChildDomainUnitsInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnitOutputReference.property.includeChildDomainUnits">includeChildDomainUnits</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnitOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnit">DatazonePolicyGrantDetailCreateDomainUnit</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnitOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnitOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `includeChildDomainUnitsInput`<sup>Optional</sup> <a name="includeChildDomainUnitsInput" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnitOutputReference.property.includeChildDomainUnitsInput"></a>

```typescript
public readonly includeChildDomainUnitsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `includeChildDomainUnits`<sup>Required</sup> <a name="includeChildDomainUnits" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnitOutputReference.property.includeChildDomainUnits"></a>

```typescript
public readonly includeChildDomainUnits: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnitOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DatazonePolicyGrantDetailCreateDomainUnit;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnit">DatazonePolicyGrantDetailCreateDomainUnit</a>

---


### DatazonePolicyGrantDetailCreateEnvironmentFromBlueprintList <a name="DatazonePolicyGrantDetailCreateEnvironmentFromBlueprintList" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentFromBlueprintList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentFromBlueprintList.Initializer"></a>

```typescript
import { datazonePolicyGrant } from '@cdktn/provider-aws'

new datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentFromBlueprintList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentFromBlueprintList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentFromBlueprintList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentFromBlueprintList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentFromBlueprintList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentFromBlueprintList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentFromBlueprintList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentFromBlueprintList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentFromBlueprintList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentFromBlueprintList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentFromBlueprintList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentFromBlueprintList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentFromBlueprintList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentFromBlueprintList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentFromBlueprintList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentFromBlueprintList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentFromBlueprintList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentFromBlueprintList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentFromBlueprintList.get"></a>

```typescript
public get(index: number): DatazonePolicyGrantDetailCreateEnvironmentFromBlueprintOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentFromBlueprintList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentFromBlueprintList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentFromBlueprintList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentFromBlueprintList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentFromBlueprint">DatazonePolicyGrantDetailCreateEnvironmentFromBlueprint</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentFromBlueprintList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentFromBlueprintList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentFromBlueprintList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DatazonePolicyGrantDetailCreateEnvironmentFromBlueprint[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentFromBlueprint">DatazonePolicyGrantDetailCreateEnvironmentFromBlueprint</a>[]

---


### DatazonePolicyGrantDetailCreateEnvironmentFromBlueprintOutputReference <a name="DatazonePolicyGrantDetailCreateEnvironmentFromBlueprintOutputReference" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentFromBlueprintOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentFromBlueprintOutputReference.Initializer"></a>

```typescript
import { datazonePolicyGrant } from '@cdktn/provider-aws'

new datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentFromBlueprintOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentFromBlueprintOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentFromBlueprintOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentFromBlueprintOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentFromBlueprintOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentFromBlueprintOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentFromBlueprintOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentFromBlueprintOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentFromBlueprintOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentFromBlueprintOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentFromBlueprintOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentFromBlueprintOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentFromBlueprintOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentFromBlueprintOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentFromBlueprintOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentFromBlueprintOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentFromBlueprintOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentFromBlueprintOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentFromBlueprintOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentFromBlueprintOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentFromBlueprintOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentFromBlueprintOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentFromBlueprintOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentFromBlueprintOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentFromBlueprintOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentFromBlueprintOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentFromBlueprintOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentFromBlueprintOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentFromBlueprintOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentFromBlueprintOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentFromBlueprintOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentFromBlueprintOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentFromBlueprintOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentFromBlueprintOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentFromBlueprintOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentFromBlueprintOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentFromBlueprintOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentFromBlueprintOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentFromBlueprintOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentFromBlueprintOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentFromBlueprintOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentFromBlueprintOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentFromBlueprintOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentFromBlueprintOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentFromBlueprintOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentFromBlueprintOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentFromBlueprintOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentFromBlueprintOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentFromBlueprintOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentFromBlueprint">DatazonePolicyGrantDetailCreateEnvironmentFromBlueprint</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentFromBlueprintOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentFromBlueprintOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentFromBlueprintOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DatazonePolicyGrantDetailCreateEnvironmentFromBlueprint;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentFromBlueprint">DatazonePolicyGrantDetailCreateEnvironmentFromBlueprint</a>

---


### DatazonePolicyGrantDetailCreateEnvironmentList <a name="DatazonePolicyGrantDetailCreateEnvironmentList" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentList.Initializer"></a>

```typescript
import { datazonePolicyGrant } from '@cdktn/provider-aws'

new datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentList.get"></a>

```typescript
public get(index: number): DatazonePolicyGrantDetailCreateEnvironmentOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironment">DatazonePolicyGrantDetailCreateEnvironment</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DatazonePolicyGrantDetailCreateEnvironment[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironment">DatazonePolicyGrantDetailCreateEnvironment</a>[]

---


### DatazonePolicyGrantDetailCreateEnvironmentOutputReference <a name="DatazonePolicyGrantDetailCreateEnvironmentOutputReference" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentOutputReference.Initializer"></a>

```typescript
import { datazonePolicyGrant } from '@cdktn/provider-aws'

new datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironment">DatazonePolicyGrantDetailCreateEnvironment</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DatazonePolicyGrantDetailCreateEnvironment;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironment">DatazonePolicyGrantDetailCreateEnvironment</a>

---


### DatazonePolicyGrantDetailCreateEnvironmentProfileList <a name="DatazonePolicyGrantDetailCreateEnvironmentProfileList" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfileList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfileList.Initializer"></a>

```typescript
import { datazonePolicyGrant } from '@cdktn/provider-aws'

new datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfileList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfileList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfileList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfileList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfileList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfileList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfileList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfileList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfileList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfileList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfileList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfileList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfileList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfileList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfileList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfileList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfileList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfileList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfileList.get"></a>

```typescript
public get(index: number): DatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfileList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfileList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfileList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfileList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfile">DatazonePolicyGrantDetailCreateEnvironmentProfile</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfileList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfileList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfileList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DatazonePolicyGrantDetailCreateEnvironmentProfile[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfile">DatazonePolicyGrantDetailCreateEnvironmentProfile</a>[]

---


### DatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference <a name="DatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference.Initializer"></a>

```typescript
import { datazonePolicyGrant } from '@cdktn/provider-aws'

new datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference.resetDomainUnitId">resetDomainUnitId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDomainUnitId` <a name="resetDomainUnitId" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference.resetDomainUnitId"></a>

```typescript
public resetDomainUnitId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference.property.domainUnitIdInput">domainUnitIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference.property.domainUnitId">domainUnitId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfile">DatazonePolicyGrantDetailCreateEnvironmentProfile</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `domainUnitIdInput`<sup>Optional</sup> <a name="domainUnitIdInput" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference.property.domainUnitIdInput"></a>

```typescript
public readonly domainUnitIdInput: string;
```

- *Type:* string

---

##### `domainUnitId`<sup>Required</sup> <a name="domainUnitId" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference.property.domainUnitId"></a>

```typescript
public readonly domainUnitId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfileOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DatazonePolicyGrantDetailCreateEnvironmentProfile;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfile">DatazonePolicyGrantDetailCreateEnvironmentProfile</a>

---


### DatazonePolicyGrantDetailCreateFormTypeList <a name="DatazonePolicyGrantDetailCreateFormTypeList" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormTypeList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormTypeList.Initializer"></a>

```typescript
import { datazonePolicyGrant } from '@cdktn/provider-aws'

new datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormTypeList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormTypeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormTypeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormTypeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormTypeList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormTypeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormTypeList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormTypeList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormTypeList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormTypeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormTypeList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormTypeList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormTypeList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormTypeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormTypeList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormTypeList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormTypeList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormTypeList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormTypeList.get"></a>

```typescript
public get(index: number): DatazonePolicyGrantDetailCreateFormTypeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormTypeList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormTypeList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormTypeList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormTypeList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormType">DatazonePolicyGrantDetailCreateFormType</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormTypeList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormTypeList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormTypeList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DatazonePolicyGrantDetailCreateFormType[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormType">DatazonePolicyGrantDetailCreateFormType</a>[]

---


### DatazonePolicyGrantDetailCreateFormTypeOutputReference <a name="DatazonePolicyGrantDetailCreateFormTypeOutputReference" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormTypeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormTypeOutputReference.Initializer"></a>

```typescript
import { datazonePolicyGrant } from '@cdktn/provider-aws'

new datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormTypeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormTypeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormTypeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormTypeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormTypeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormTypeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormTypeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormTypeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormTypeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormTypeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormTypeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormTypeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormTypeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormTypeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormTypeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormTypeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormTypeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormTypeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormTypeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormTypeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormTypeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormTypeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormTypeOutputReference.resetIncludeChildDomainUnits">resetIncludeChildDomainUnits</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormTypeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormTypeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormTypeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormTypeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormTypeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormTypeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormTypeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormTypeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormTypeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormTypeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormTypeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormTypeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormTypeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormTypeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormTypeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormTypeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormTypeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormTypeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormTypeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormTypeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormTypeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormTypeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormTypeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormTypeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIncludeChildDomainUnits` <a name="resetIncludeChildDomainUnits" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormTypeOutputReference.resetIncludeChildDomainUnits"></a>

```typescript
public resetIncludeChildDomainUnits(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormTypeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormTypeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormTypeOutputReference.property.includeChildDomainUnitsInput">includeChildDomainUnitsInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormTypeOutputReference.property.includeChildDomainUnits">includeChildDomainUnits</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormTypeOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormType">DatazonePolicyGrantDetailCreateFormType</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormTypeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormTypeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `includeChildDomainUnitsInput`<sup>Optional</sup> <a name="includeChildDomainUnitsInput" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormTypeOutputReference.property.includeChildDomainUnitsInput"></a>

```typescript
public readonly includeChildDomainUnitsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `includeChildDomainUnits`<sup>Required</sup> <a name="includeChildDomainUnits" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormTypeOutputReference.property.includeChildDomainUnits"></a>

```typescript
public readonly includeChildDomainUnits: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormTypeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DatazonePolicyGrantDetailCreateFormType;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormType">DatazonePolicyGrantDetailCreateFormType</a>

---


### DatazonePolicyGrantDetailCreateGlossaryList <a name="DatazonePolicyGrantDetailCreateGlossaryList" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossaryList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossaryList.Initializer"></a>

```typescript
import { datazonePolicyGrant } from '@cdktn/provider-aws'

new datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossaryList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossaryList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossaryList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossaryList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossaryList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossaryList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossaryList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossaryList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossaryList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossaryList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossaryList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossaryList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossaryList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossaryList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossaryList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossaryList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossaryList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossaryList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossaryList.get"></a>

```typescript
public get(index: number): DatazonePolicyGrantDetailCreateGlossaryOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossaryList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossaryList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossaryList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossaryList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossary">DatazonePolicyGrantDetailCreateGlossary</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossaryList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossaryList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossaryList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DatazonePolicyGrantDetailCreateGlossary[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossary">DatazonePolicyGrantDetailCreateGlossary</a>[]

---


### DatazonePolicyGrantDetailCreateGlossaryOutputReference <a name="DatazonePolicyGrantDetailCreateGlossaryOutputReference" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossaryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossaryOutputReference.Initializer"></a>

```typescript
import { datazonePolicyGrant } from '@cdktn/provider-aws'

new datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossaryOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossaryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossaryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossaryOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossaryOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossaryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossaryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossaryOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossaryOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossaryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossaryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossaryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossaryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossaryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossaryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossaryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossaryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossaryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossaryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossaryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossaryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossaryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossaryOutputReference.resetIncludeChildDomainUnits">resetIncludeChildDomainUnits</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossaryOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossaryOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossaryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossaryOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossaryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossaryOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossaryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossaryOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossaryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossaryOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossaryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossaryOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossaryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossaryOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossaryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossaryOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossaryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossaryOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossaryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossaryOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossaryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossaryOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossaryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossaryOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIncludeChildDomainUnits` <a name="resetIncludeChildDomainUnits" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossaryOutputReference.resetIncludeChildDomainUnits"></a>

```typescript
public resetIncludeChildDomainUnits(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossaryOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossaryOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossaryOutputReference.property.includeChildDomainUnitsInput">includeChildDomainUnitsInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossaryOutputReference.property.includeChildDomainUnits">includeChildDomainUnits</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossaryOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossary">DatazonePolicyGrantDetailCreateGlossary</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossaryOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossaryOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `includeChildDomainUnitsInput`<sup>Optional</sup> <a name="includeChildDomainUnitsInput" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossaryOutputReference.property.includeChildDomainUnitsInput"></a>

```typescript
public readonly includeChildDomainUnitsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `includeChildDomainUnits`<sup>Required</sup> <a name="includeChildDomainUnits" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossaryOutputReference.property.includeChildDomainUnits"></a>

```typescript
public readonly includeChildDomainUnits: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossaryOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DatazonePolicyGrantDetailCreateGlossary;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossary">DatazonePolicyGrantDetailCreateGlossary</a>

---


### DatazonePolicyGrantDetailCreateProjectFromProjectProfileList <a name="DatazonePolicyGrantDetailCreateProjectFromProjectProfileList" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfileList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfileList.Initializer"></a>

```typescript
import { datazonePolicyGrant } from '@cdktn/provider-aws'

new datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfileList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfileList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfileList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfileList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfileList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfileList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfileList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfileList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfileList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfileList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfileList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfileList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfileList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfileList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfileList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfileList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfileList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfileList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfileList.get"></a>

```typescript
public get(index: number): DatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfileList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfileList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfileList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfileList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfile">DatazonePolicyGrantDetailCreateProjectFromProjectProfile</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfileList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfileList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfileList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DatazonePolicyGrantDetailCreateProjectFromProjectProfile[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfile">DatazonePolicyGrantDetailCreateProjectFromProjectProfile</a>[]

---


### DatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference <a name="DatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference.Initializer"></a>

```typescript
import { datazonePolicyGrant } from '@cdktn/provider-aws'

new datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference.resetIncludeChildDomainUnits">resetIncludeChildDomainUnits</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference.resetProjectProfiles">resetProjectProfiles</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIncludeChildDomainUnits` <a name="resetIncludeChildDomainUnits" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference.resetIncludeChildDomainUnits"></a>

```typescript
public resetIncludeChildDomainUnits(): void
```

##### `resetProjectProfiles` <a name="resetProjectProfiles" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference.resetProjectProfiles"></a>

```typescript
public resetProjectProfiles(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference.property.includeChildDomainUnitsInput">includeChildDomainUnitsInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference.property.projectProfilesInput">projectProfilesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference.property.includeChildDomainUnits">includeChildDomainUnits</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference.property.projectProfiles">projectProfiles</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfile">DatazonePolicyGrantDetailCreateProjectFromProjectProfile</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `includeChildDomainUnitsInput`<sup>Optional</sup> <a name="includeChildDomainUnitsInput" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference.property.includeChildDomainUnitsInput"></a>

```typescript
public readonly includeChildDomainUnitsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `projectProfilesInput`<sup>Optional</sup> <a name="projectProfilesInput" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference.property.projectProfilesInput"></a>

```typescript
public readonly projectProfilesInput: string[];
```

- *Type:* string[]

---

##### `includeChildDomainUnits`<sup>Required</sup> <a name="includeChildDomainUnits" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference.property.includeChildDomainUnits"></a>

```typescript
public readonly includeChildDomainUnits: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `projectProfiles`<sup>Required</sup> <a name="projectProfiles" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference.property.projectProfiles"></a>

```typescript
public readonly projectProfiles: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfileOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DatazonePolicyGrantDetailCreateProjectFromProjectProfile;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfile">DatazonePolicyGrantDetailCreateProjectFromProjectProfile</a>

---


### DatazonePolicyGrantDetailCreateProjectList <a name="DatazonePolicyGrantDetailCreateProjectList" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectList.Initializer"></a>

```typescript
import { datazonePolicyGrant } from '@cdktn/provider-aws'

new datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectList.get"></a>

```typescript
public get(index: number): DatazonePolicyGrantDetailCreateProjectOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProject">DatazonePolicyGrantDetailCreateProject</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DatazonePolicyGrantDetailCreateProject[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProject">DatazonePolicyGrantDetailCreateProject</a>[]

---


### DatazonePolicyGrantDetailCreateProjectOutputReference <a name="DatazonePolicyGrantDetailCreateProjectOutputReference" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectOutputReference.Initializer"></a>

```typescript
import { datazonePolicyGrant } from '@cdktn/provider-aws'

new datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectOutputReference.resetIncludeChildDomainUnits">resetIncludeChildDomainUnits</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIncludeChildDomainUnits` <a name="resetIncludeChildDomainUnits" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectOutputReference.resetIncludeChildDomainUnits"></a>

```typescript
public resetIncludeChildDomainUnits(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectOutputReference.property.includeChildDomainUnitsInput">includeChildDomainUnitsInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectOutputReference.property.includeChildDomainUnits">includeChildDomainUnits</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProject">DatazonePolicyGrantDetailCreateProject</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `includeChildDomainUnitsInput`<sup>Optional</sup> <a name="includeChildDomainUnitsInput" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectOutputReference.property.includeChildDomainUnitsInput"></a>

```typescript
public readonly includeChildDomainUnitsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `includeChildDomainUnits`<sup>Required</sup> <a name="includeChildDomainUnits" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectOutputReference.property.includeChildDomainUnits"></a>

```typescript
public readonly includeChildDomainUnits: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DatazonePolicyGrantDetailCreateProject;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProject">DatazonePolicyGrantDetailCreateProject</a>

---


### DatazonePolicyGrantDetailDelegateCreateEnvironmentProfileList <a name="DatazonePolicyGrantDetailDelegateCreateEnvironmentProfileList" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailDelegateCreateEnvironmentProfileList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailDelegateCreateEnvironmentProfileList.Initializer"></a>

```typescript
import { datazonePolicyGrant } from '@cdktn/provider-aws'

new datazonePolicyGrant.DatazonePolicyGrantDetailDelegateCreateEnvironmentProfileList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailDelegateCreateEnvironmentProfileList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailDelegateCreateEnvironmentProfileList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailDelegateCreateEnvironmentProfileList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailDelegateCreateEnvironmentProfileList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailDelegateCreateEnvironmentProfileList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailDelegateCreateEnvironmentProfileList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailDelegateCreateEnvironmentProfileList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailDelegateCreateEnvironmentProfileList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailDelegateCreateEnvironmentProfileList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailDelegateCreateEnvironmentProfileList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailDelegateCreateEnvironmentProfileList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailDelegateCreateEnvironmentProfileList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailDelegateCreateEnvironmentProfileList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailDelegateCreateEnvironmentProfileList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailDelegateCreateEnvironmentProfileList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailDelegateCreateEnvironmentProfileList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailDelegateCreateEnvironmentProfileList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailDelegateCreateEnvironmentProfileList.get"></a>

```typescript
public get(index: number): DatazonePolicyGrantDetailDelegateCreateEnvironmentProfileOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailDelegateCreateEnvironmentProfileList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailDelegateCreateEnvironmentProfileList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailDelegateCreateEnvironmentProfileList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailDelegateCreateEnvironmentProfileList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailDelegateCreateEnvironmentProfile">DatazonePolicyGrantDetailDelegateCreateEnvironmentProfile</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailDelegateCreateEnvironmentProfileList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailDelegateCreateEnvironmentProfileList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailDelegateCreateEnvironmentProfileList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DatazonePolicyGrantDetailDelegateCreateEnvironmentProfile[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailDelegateCreateEnvironmentProfile">DatazonePolicyGrantDetailDelegateCreateEnvironmentProfile</a>[]

---


### DatazonePolicyGrantDetailDelegateCreateEnvironmentProfileOutputReference <a name="DatazonePolicyGrantDetailDelegateCreateEnvironmentProfileOutputReference" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailDelegateCreateEnvironmentProfileOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailDelegateCreateEnvironmentProfileOutputReference.Initializer"></a>

```typescript
import { datazonePolicyGrant } from '@cdktn/provider-aws'

new datazonePolicyGrant.DatazonePolicyGrantDetailDelegateCreateEnvironmentProfileOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailDelegateCreateEnvironmentProfileOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailDelegateCreateEnvironmentProfileOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailDelegateCreateEnvironmentProfileOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailDelegateCreateEnvironmentProfileOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailDelegateCreateEnvironmentProfileOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailDelegateCreateEnvironmentProfileOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailDelegateCreateEnvironmentProfileOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailDelegateCreateEnvironmentProfileOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailDelegateCreateEnvironmentProfileOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailDelegateCreateEnvironmentProfileOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailDelegateCreateEnvironmentProfileOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailDelegateCreateEnvironmentProfileOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailDelegateCreateEnvironmentProfileOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailDelegateCreateEnvironmentProfileOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailDelegateCreateEnvironmentProfileOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailDelegateCreateEnvironmentProfileOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailDelegateCreateEnvironmentProfileOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailDelegateCreateEnvironmentProfileOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailDelegateCreateEnvironmentProfileOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailDelegateCreateEnvironmentProfileOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailDelegateCreateEnvironmentProfileOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailDelegateCreateEnvironmentProfileOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailDelegateCreateEnvironmentProfileOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailDelegateCreateEnvironmentProfileOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailDelegateCreateEnvironmentProfileOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailDelegateCreateEnvironmentProfileOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailDelegateCreateEnvironmentProfileOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailDelegateCreateEnvironmentProfileOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailDelegateCreateEnvironmentProfileOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailDelegateCreateEnvironmentProfileOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailDelegateCreateEnvironmentProfileOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailDelegateCreateEnvironmentProfileOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailDelegateCreateEnvironmentProfileOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailDelegateCreateEnvironmentProfileOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailDelegateCreateEnvironmentProfileOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailDelegateCreateEnvironmentProfileOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailDelegateCreateEnvironmentProfileOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailDelegateCreateEnvironmentProfileOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailDelegateCreateEnvironmentProfileOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailDelegateCreateEnvironmentProfileOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailDelegateCreateEnvironmentProfileOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailDelegateCreateEnvironmentProfileOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailDelegateCreateEnvironmentProfileOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailDelegateCreateEnvironmentProfileOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailDelegateCreateEnvironmentProfileOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailDelegateCreateEnvironmentProfileOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailDelegateCreateEnvironmentProfileOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailDelegateCreateEnvironmentProfileOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailDelegateCreateEnvironmentProfile">DatazonePolicyGrantDetailDelegateCreateEnvironmentProfile</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailDelegateCreateEnvironmentProfileOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailDelegateCreateEnvironmentProfileOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailDelegateCreateEnvironmentProfileOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DatazonePolicyGrantDetailDelegateCreateEnvironmentProfile;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailDelegateCreateEnvironmentProfile">DatazonePolicyGrantDetailDelegateCreateEnvironmentProfile</a>

---


### DatazonePolicyGrantDetailList <a name="DatazonePolicyGrantDetailList" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailList.Initializer"></a>

```typescript
import { datazonePolicyGrant } from '@cdktn/provider-aws'

new datazonePolicyGrant.DatazonePolicyGrantDetailList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailList.get"></a>

```typescript
public get(index: number): DatazonePolicyGrantDetailOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetail">DatazonePolicyGrantDetail</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DatazonePolicyGrantDetail[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetail">DatazonePolicyGrantDetail</a>[]

---


### DatazonePolicyGrantDetailOutputReference <a name="DatazonePolicyGrantDetailOutputReference" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.Initializer"></a>

```typescript
import { datazonePolicyGrant } from '@cdktn/provider-aws'

new datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.putAddToProjectMemberPool">putAddToProjectMemberPool</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.putCreateAssetType">putCreateAssetType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.putCreateDomainUnit">putCreateDomainUnit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.putCreateEnvironment">putCreateEnvironment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.putCreateEnvironmentFromBlueprint">putCreateEnvironmentFromBlueprint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.putCreateEnvironmentProfile">putCreateEnvironmentProfile</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.putCreateFormType">putCreateFormType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.putCreateGlossary">putCreateGlossary</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.putCreateProject">putCreateProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.putCreateProjectFromProjectProfile">putCreateProjectFromProjectProfile</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.putDelegateCreateEnvironmentProfile">putDelegateCreateEnvironmentProfile</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.putOverrideDomainUnitOwners">putOverrideDomainUnitOwners</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.putOverrideProjectOwners">putOverrideProjectOwners</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.putUseAssetType">putUseAssetType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.resetAddToProjectMemberPool">resetAddToProjectMemberPool</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.resetCreateAssetType">resetCreateAssetType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.resetCreateDomainUnit">resetCreateDomainUnit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.resetCreateEnvironment">resetCreateEnvironment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.resetCreateEnvironmentFromBlueprint">resetCreateEnvironmentFromBlueprint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.resetCreateEnvironmentProfile">resetCreateEnvironmentProfile</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.resetCreateFormType">resetCreateFormType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.resetCreateGlossary">resetCreateGlossary</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.resetCreateProject">resetCreateProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.resetCreateProjectFromProjectProfile">resetCreateProjectFromProjectProfile</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.resetDelegateCreateEnvironmentProfile">resetDelegateCreateEnvironmentProfile</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.resetOverrideDomainUnitOwners">resetOverrideDomainUnitOwners</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.resetOverrideProjectOwners">resetOverrideProjectOwners</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.resetUseAssetType">resetUseAssetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAddToProjectMemberPool` <a name="putAddToProjectMemberPool" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.putAddToProjectMemberPool"></a>

```typescript
public putAddToProjectMemberPool(value: IResolvable | DatazonePolicyGrantDetailAddToProjectMemberPool[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.putAddToProjectMemberPool.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPool">DatazonePolicyGrantDetailAddToProjectMemberPool</a>[]

---

##### `putCreateAssetType` <a name="putCreateAssetType" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.putCreateAssetType"></a>

```typescript
public putCreateAssetType(value: IResolvable | DatazonePolicyGrantDetailCreateAssetType[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.putCreateAssetType.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetType">DatazonePolicyGrantDetailCreateAssetType</a>[]

---

##### `putCreateDomainUnit` <a name="putCreateDomainUnit" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.putCreateDomainUnit"></a>

```typescript
public putCreateDomainUnit(value: IResolvable | DatazonePolicyGrantDetailCreateDomainUnit[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.putCreateDomainUnit.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnit">DatazonePolicyGrantDetailCreateDomainUnit</a>[]

---

##### `putCreateEnvironment` <a name="putCreateEnvironment" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.putCreateEnvironment"></a>

```typescript
public putCreateEnvironment(value: IResolvable | DatazonePolicyGrantDetailCreateEnvironment[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.putCreateEnvironment.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironment">DatazonePolicyGrantDetailCreateEnvironment</a>[]

---

##### `putCreateEnvironmentFromBlueprint` <a name="putCreateEnvironmentFromBlueprint" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.putCreateEnvironmentFromBlueprint"></a>

```typescript
public putCreateEnvironmentFromBlueprint(value: IResolvable | DatazonePolicyGrantDetailCreateEnvironmentFromBlueprint[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.putCreateEnvironmentFromBlueprint.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentFromBlueprint">DatazonePolicyGrantDetailCreateEnvironmentFromBlueprint</a>[]

---

##### `putCreateEnvironmentProfile` <a name="putCreateEnvironmentProfile" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.putCreateEnvironmentProfile"></a>

```typescript
public putCreateEnvironmentProfile(value: IResolvable | DatazonePolicyGrantDetailCreateEnvironmentProfile[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.putCreateEnvironmentProfile.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfile">DatazonePolicyGrantDetailCreateEnvironmentProfile</a>[]

---

##### `putCreateFormType` <a name="putCreateFormType" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.putCreateFormType"></a>

```typescript
public putCreateFormType(value: IResolvable | DatazonePolicyGrantDetailCreateFormType[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.putCreateFormType.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormType">DatazonePolicyGrantDetailCreateFormType</a>[]

---

##### `putCreateGlossary` <a name="putCreateGlossary" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.putCreateGlossary"></a>

```typescript
public putCreateGlossary(value: IResolvable | DatazonePolicyGrantDetailCreateGlossary[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.putCreateGlossary.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossary">DatazonePolicyGrantDetailCreateGlossary</a>[]

---

##### `putCreateProject` <a name="putCreateProject" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.putCreateProject"></a>

```typescript
public putCreateProject(value: IResolvable | DatazonePolicyGrantDetailCreateProject[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.putCreateProject.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProject">DatazonePolicyGrantDetailCreateProject</a>[]

---

##### `putCreateProjectFromProjectProfile` <a name="putCreateProjectFromProjectProfile" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.putCreateProjectFromProjectProfile"></a>

```typescript
public putCreateProjectFromProjectProfile(value: IResolvable | DatazonePolicyGrantDetailCreateProjectFromProjectProfile[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.putCreateProjectFromProjectProfile.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfile">DatazonePolicyGrantDetailCreateProjectFromProjectProfile</a>[]

---

##### `putDelegateCreateEnvironmentProfile` <a name="putDelegateCreateEnvironmentProfile" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.putDelegateCreateEnvironmentProfile"></a>

```typescript
public putDelegateCreateEnvironmentProfile(value: IResolvable | DatazonePolicyGrantDetailDelegateCreateEnvironmentProfile[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.putDelegateCreateEnvironmentProfile.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailDelegateCreateEnvironmentProfile">DatazonePolicyGrantDetailDelegateCreateEnvironmentProfile</a>[]

---

##### `putOverrideDomainUnitOwners` <a name="putOverrideDomainUnitOwners" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.putOverrideDomainUnitOwners"></a>

```typescript
public putOverrideDomainUnitOwners(value: IResolvable | DatazonePolicyGrantDetailOverrideDomainUnitOwners[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.putOverrideDomainUnitOwners.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwners">DatazonePolicyGrantDetailOverrideDomainUnitOwners</a>[]

---

##### `putOverrideProjectOwners` <a name="putOverrideProjectOwners" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.putOverrideProjectOwners"></a>

```typescript
public putOverrideProjectOwners(value: IResolvable | DatazonePolicyGrantDetailOverrideProjectOwners[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.putOverrideProjectOwners.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwners">DatazonePolicyGrantDetailOverrideProjectOwners</a>[]

---

##### `putUseAssetType` <a name="putUseAssetType" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.putUseAssetType"></a>

```typescript
public putUseAssetType(value: IResolvable | DatazonePolicyGrantDetailUseAssetType[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.putUseAssetType.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailUseAssetType">DatazonePolicyGrantDetailUseAssetType</a>[]

---

##### `resetAddToProjectMemberPool` <a name="resetAddToProjectMemberPool" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.resetAddToProjectMemberPool"></a>

```typescript
public resetAddToProjectMemberPool(): void
```

##### `resetCreateAssetType` <a name="resetCreateAssetType" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.resetCreateAssetType"></a>

```typescript
public resetCreateAssetType(): void
```

##### `resetCreateDomainUnit` <a name="resetCreateDomainUnit" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.resetCreateDomainUnit"></a>

```typescript
public resetCreateDomainUnit(): void
```

##### `resetCreateEnvironment` <a name="resetCreateEnvironment" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.resetCreateEnvironment"></a>

```typescript
public resetCreateEnvironment(): void
```

##### `resetCreateEnvironmentFromBlueprint` <a name="resetCreateEnvironmentFromBlueprint" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.resetCreateEnvironmentFromBlueprint"></a>

```typescript
public resetCreateEnvironmentFromBlueprint(): void
```

##### `resetCreateEnvironmentProfile` <a name="resetCreateEnvironmentProfile" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.resetCreateEnvironmentProfile"></a>

```typescript
public resetCreateEnvironmentProfile(): void
```

##### `resetCreateFormType` <a name="resetCreateFormType" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.resetCreateFormType"></a>

```typescript
public resetCreateFormType(): void
```

##### `resetCreateGlossary` <a name="resetCreateGlossary" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.resetCreateGlossary"></a>

```typescript
public resetCreateGlossary(): void
```

##### `resetCreateProject` <a name="resetCreateProject" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.resetCreateProject"></a>

```typescript
public resetCreateProject(): void
```

##### `resetCreateProjectFromProjectProfile` <a name="resetCreateProjectFromProjectProfile" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.resetCreateProjectFromProjectProfile"></a>

```typescript
public resetCreateProjectFromProjectProfile(): void
```

##### `resetDelegateCreateEnvironmentProfile` <a name="resetDelegateCreateEnvironmentProfile" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.resetDelegateCreateEnvironmentProfile"></a>

```typescript
public resetDelegateCreateEnvironmentProfile(): void
```

##### `resetOverrideDomainUnitOwners` <a name="resetOverrideDomainUnitOwners" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.resetOverrideDomainUnitOwners"></a>

```typescript
public resetOverrideDomainUnitOwners(): void
```

##### `resetOverrideProjectOwners` <a name="resetOverrideProjectOwners" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.resetOverrideProjectOwners"></a>

```typescript
public resetOverrideProjectOwners(): void
```

##### `resetUseAssetType` <a name="resetUseAssetType" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.resetUseAssetType"></a>

```typescript
public resetUseAssetType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.property.addToProjectMemberPool">addToProjectMemberPool</a></code> | <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPoolList">DatazonePolicyGrantDetailAddToProjectMemberPoolList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.property.createAssetType">createAssetType</a></code> | <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetTypeList">DatazonePolicyGrantDetailCreateAssetTypeList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.property.createDomainUnit">createDomainUnit</a></code> | <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnitList">DatazonePolicyGrantDetailCreateDomainUnitList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.property.createEnvironment">createEnvironment</a></code> | <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentList">DatazonePolicyGrantDetailCreateEnvironmentList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.property.createEnvironmentFromBlueprint">createEnvironmentFromBlueprint</a></code> | <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentFromBlueprintList">DatazonePolicyGrantDetailCreateEnvironmentFromBlueprintList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.property.createEnvironmentProfile">createEnvironmentProfile</a></code> | <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfileList">DatazonePolicyGrantDetailCreateEnvironmentProfileList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.property.createFormType">createFormType</a></code> | <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormTypeList">DatazonePolicyGrantDetailCreateFormTypeList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.property.createGlossary">createGlossary</a></code> | <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossaryList">DatazonePolicyGrantDetailCreateGlossaryList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.property.createProject">createProject</a></code> | <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectList">DatazonePolicyGrantDetailCreateProjectList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.property.createProjectFromProjectProfile">createProjectFromProjectProfile</a></code> | <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfileList">DatazonePolicyGrantDetailCreateProjectFromProjectProfileList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.property.delegateCreateEnvironmentProfile">delegateCreateEnvironmentProfile</a></code> | <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailDelegateCreateEnvironmentProfileList">DatazonePolicyGrantDetailDelegateCreateEnvironmentProfileList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.property.overrideDomainUnitOwners">overrideDomainUnitOwners</a></code> | <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwnersList">DatazonePolicyGrantDetailOverrideDomainUnitOwnersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.property.overrideProjectOwners">overrideProjectOwners</a></code> | <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwnersList">DatazonePolicyGrantDetailOverrideProjectOwnersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.property.useAssetType">useAssetType</a></code> | <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailUseAssetTypeList">DatazonePolicyGrantDetailUseAssetTypeList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.property.addToProjectMemberPoolInput">addToProjectMemberPoolInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPool">DatazonePolicyGrantDetailAddToProjectMemberPool</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.property.createAssetTypeInput">createAssetTypeInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetType">DatazonePolicyGrantDetailCreateAssetType</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.property.createDomainUnitInput">createDomainUnitInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnit">DatazonePolicyGrantDetailCreateDomainUnit</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.property.createEnvironmentFromBlueprintInput">createEnvironmentFromBlueprintInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentFromBlueprint">DatazonePolicyGrantDetailCreateEnvironmentFromBlueprint</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.property.createEnvironmentInput">createEnvironmentInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironment">DatazonePolicyGrantDetailCreateEnvironment</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.property.createEnvironmentProfileInput">createEnvironmentProfileInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfile">DatazonePolicyGrantDetailCreateEnvironmentProfile</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.property.createFormTypeInput">createFormTypeInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormType">DatazonePolicyGrantDetailCreateFormType</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.property.createGlossaryInput">createGlossaryInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossary">DatazonePolicyGrantDetailCreateGlossary</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.property.createProjectFromProjectProfileInput">createProjectFromProjectProfileInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfile">DatazonePolicyGrantDetailCreateProjectFromProjectProfile</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.property.createProjectInput">createProjectInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProject">DatazonePolicyGrantDetailCreateProject</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.property.delegateCreateEnvironmentProfileInput">delegateCreateEnvironmentProfileInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailDelegateCreateEnvironmentProfile">DatazonePolicyGrantDetailDelegateCreateEnvironmentProfile</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.property.overrideDomainUnitOwnersInput">overrideDomainUnitOwnersInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwners">DatazonePolicyGrantDetailOverrideDomainUnitOwners</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.property.overrideProjectOwnersInput">overrideProjectOwnersInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwners">DatazonePolicyGrantDetailOverrideProjectOwners</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.property.useAssetTypeInput">useAssetTypeInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailUseAssetType">DatazonePolicyGrantDetailUseAssetType</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetail">DatazonePolicyGrantDetail</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `addToProjectMemberPool`<sup>Required</sup> <a name="addToProjectMemberPool" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.property.addToProjectMemberPool"></a>

```typescript
public readonly addToProjectMemberPool: DatazonePolicyGrantDetailAddToProjectMemberPoolList;
```

- *Type:* <a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPoolList">DatazonePolicyGrantDetailAddToProjectMemberPoolList</a>

---

##### `createAssetType`<sup>Required</sup> <a name="createAssetType" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.property.createAssetType"></a>

```typescript
public readonly createAssetType: DatazonePolicyGrantDetailCreateAssetTypeList;
```

- *Type:* <a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetTypeList">DatazonePolicyGrantDetailCreateAssetTypeList</a>

---

##### `createDomainUnit`<sup>Required</sup> <a name="createDomainUnit" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.property.createDomainUnit"></a>

```typescript
public readonly createDomainUnit: DatazonePolicyGrantDetailCreateDomainUnitList;
```

- *Type:* <a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnitList">DatazonePolicyGrantDetailCreateDomainUnitList</a>

---

##### `createEnvironment`<sup>Required</sup> <a name="createEnvironment" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.property.createEnvironment"></a>

```typescript
public readonly createEnvironment: DatazonePolicyGrantDetailCreateEnvironmentList;
```

- *Type:* <a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentList">DatazonePolicyGrantDetailCreateEnvironmentList</a>

---

##### `createEnvironmentFromBlueprint`<sup>Required</sup> <a name="createEnvironmentFromBlueprint" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.property.createEnvironmentFromBlueprint"></a>

```typescript
public readonly createEnvironmentFromBlueprint: DatazonePolicyGrantDetailCreateEnvironmentFromBlueprintList;
```

- *Type:* <a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentFromBlueprintList">DatazonePolicyGrantDetailCreateEnvironmentFromBlueprintList</a>

---

##### `createEnvironmentProfile`<sup>Required</sup> <a name="createEnvironmentProfile" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.property.createEnvironmentProfile"></a>

```typescript
public readonly createEnvironmentProfile: DatazonePolicyGrantDetailCreateEnvironmentProfileList;
```

- *Type:* <a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfileList">DatazonePolicyGrantDetailCreateEnvironmentProfileList</a>

---

##### `createFormType`<sup>Required</sup> <a name="createFormType" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.property.createFormType"></a>

```typescript
public readonly createFormType: DatazonePolicyGrantDetailCreateFormTypeList;
```

- *Type:* <a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormTypeList">DatazonePolicyGrantDetailCreateFormTypeList</a>

---

##### `createGlossary`<sup>Required</sup> <a name="createGlossary" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.property.createGlossary"></a>

```typescript
public readonly createGlossary: DatazonePolicyGrantDetailCreateGlossaryList;
```

- *Type:* <a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossaryList">DatazonePolicyGrantDetailCreateGlossaryList</a>

---

##### `createProject`<sup>Required</sup> <a name="createProject" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.property.createProject"></a>

```typescript
public readonly createProject: DatazonePolicyGrantDetailCreateProjectList;
```

- *Type:* <a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectList">DatazonePolicyGrantDetailCreateProjectList</a>

---

##### `createProjectFromProjectProfile`<sup>Required</sup> <a name="createProjectFromProjectProfile" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.property.createProjectFromProjectProfile"></a>

```typescript
public readonly createProjectFromProjectProfile: DatazonePolicyGrantDetailCreateProjectFromProjectProfileList;
```

- *Type:* <a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfileList">DatazonePolicyGrantDetailCreateProjectFromProjectProfileList</a>

---

##### `delegateCreateEnvironmentProfile`<sup>Required</sup> <a name="delegateCreateEnvironmentProfile" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.property.delegateCreateEnvironmentProfile"></a>

```typescript
public readonly delegateCreateEnvironmentProfile: DatazonePolicyGrantDetailDelegateCreateEnvironmentProfileList;
```

- *Type:* <a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailDelegateCreateEnvironmentProfileList">DatazonePolicyGrantDetailDelegateCreateEnvironmentProfileList</a>

---

##### `overrideDomainUnitOwners`<sup>Required</sup> <a name="overrideDomainUnitOwners" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.property.overrideDomainUnitOwners"></a>

```typescript
public readonly overrideDomainUnitOwners: DatazonePolicyGrantDetailOverrideDomainUnitOwnersList;
```

- *Type:* <a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwnersList">DatazonePolicyGrantDetailOverrideDomainUnitOwnersList</a>

---

##### `overrideProjectOwners`<sup>Required</sup> <a name="overrideProjectOwners" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.property.overrideProjectOwners"></a>

```typescript
public readonly overrideProjectOwners: DatazonePolicyGrantDetailOverrideProjectOwnersList;
```

- *Type:* <a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwnersList">DatazonePolicyGrantDetailOverrideProjectOwnersList</a>

---

##### `useAssetType`<sup>Required</sup> <a name="useAssetType" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.property.useAssetType"></a>

```typescript
public readonly useAssetType: DatazonePolicyGrantDetailUseAssetTypeList;
```

- *Type:* <a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailUseAssetTypeList">DatazonePolicyGrantDetailUseAssetTypeList</a>

---

##### `addToProjectMemberPoolInput`<sup>Optional</sup> <a name="addToProjectMemberPoolInput" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.property.addToProjectMemberPoolInput"></a>

```typescript
public readonly addToProjectMemberPoolInput: IResolvable | DatazonePolicyGrantDetailAddToProjectMemberPool[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailAddToProjectMemberPool">DatazonePolicyGrantDetailAddToProjectMemberPool</a>[]

---

##### `createAssetTypeInput`<sup>Optional</sup> <a name="createAssetTypeInput" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.property.createAssetTypeInput"></a>

```typescript
public readonly createAssetTypeInput: IResolvable | DatazonePolicyGrantDetailCreateAssetType[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateAssetType">DatazonePolicyGrantDetailCreateAssetType</a>[]

---

##### `createDomainUnitInput`<sup>Optional</sup> <a name="createDomainUnitInput" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.property.createDomainUnitInput"></a>

```typescript
public readonly createDomainUnitInput: IResolvable | DatazonePolicyGrantDetailCreateDomainUnit[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateDomainUnit">DatazonePolicyGrantDetailCreateDomainUnit</a>[]

---

##### `createEnvironmentFromBlueprintInput`<sup>Optional</sup> <a name="createEnvironmentFromBlueprintInput" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.property.createEnvironmentFromBlueprintInput"></a>

```typescript
public readonly createEnvironmentFromBlueprintInput: IResolvable | DatazonePolicyGrantDetailCreateEnvironmentFromBlueprint[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentFromBlueprint">DatazonePolicyGrantDetailCreateEnvironmentFromBlueprint</a>[]

---

##### `createEnvironmentInput`<sup>Optional</sup> <a name="createEnvironmentInput" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.property.createEnvironmentInput"></a>

```typescript
public readonly createEnvironmentInput: IResolvable | DatazonePolicyGrantDetailCreateEnvironment[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironment">DatazonePolicyGrantDetailCreateEnvironment</a>[]

---

##### `createEnvironmentProfileInput`<sup>Optional</sup> <a name="createEnvironmentProfileInput" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.property.createEnvironmentProfileInput"></a>

```typescript
public readonly createEnvironmentProfileInput: IResolvable | DatazonePolicyGrantDetailCreateEnvironmentProfile[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateEnvironmentProfile">DatazonePolicyGrantDetailCreateEnvironmentProfile</a>[]

---

##### `createFormTypeInput`<sup>Optional</sup> <a name="createFormTypeInput" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.property.createFormTypeInput"></a>

```typescript
public readonly createFormTypeInput: IResolvable | DatazonePolicyGrantDetailCreateFormType[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateFormType">DatazonePolicyGrantDetailCreateFormType</a>[]

---

##### `createGlossaryInput`<sup>Optional</sup> <a name="createGlossaryInput" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.property.createGlossaryInput"></a>

```typescript
public readonly createGlossaryInput: IResolvable | DatazonePolicyGrantDetailCreateGlossary[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateGlossary">DatazonePolicyGrantDetailCreateGlossary</a>[]

---

##### `createProjectFromProjectProfileInput`<sup>Optional</sup> <a name="createProjectFromProjectProfileInput" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.property.createProjectFromProjectProfileInput"></a>

```typescript
public readonly createProjectFromProjectProfileInput: IResolvable | DatazonePolicyGrantDetailCreateProjectFromProjectProfile[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProjectFromProjectProfile">DatazonePolicyGrantDetailCreateProjectFromProjectProfile</a>[]

---

##### `createProjectInput`<sup>Optional</sup> <a name="createProjectInput" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.property.createProjectInput"></a>

```typescript
public readonly createProjectInput: IResolvable | DatazonePolicyGrantDetailCreateProject[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailCreateProject">DatazonePolicyGrantDetailCreateProject</a>[]

---

##### `delegateCreateEnvironmentProfileInput`<sup>Optional</sup> <a name="delegateCreateEnvironmentProfileInput" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.property.delegateCreateEnvironmentProfileInput"></a>

```typescript
public readonly delegateCreateEnvironmentProfileInput: IResolvable | DatazonePolicyGrantDetailDelegateCreateEnvironmentProfile[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailDelegateCreateEnvironmentProfile">DatazonePolicyGrantDetailDelegateCreateEnvironmentProfile</a>[]

---

##### `overrideDomainUnitOwnersInput`<sup>Optional</sup> <a name="overrideDomainUnitOwnersInput" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.property.overrideDomainUnitOwnersInput"></a>

```typescript
public readonly overrideDomainUnitOwnersInput: IResolvable | DatazonePolicyGrantDetailOverrideDomainUnitOwners[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwners">DatazonePolicyGrantDetailOverrideDomainUnitOwners</a>[]

---

##### `overrideProjectOwnersInput`<sup>Optional</sup> <a name="overrideProjectOwnersInput" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.property.overrideProjectOwnersInput"></a>

```typescript
public readonly overrideProjectOwnersInput: IResolvable | DatazonePolicyGrantDetailOverrideProjectOwners[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwners">DatazonePolicyGrantDetailOverrideProjectOwners</a>[]

---

##### `useAssetTypeInput`<sup>Optional</sup> <a name="useAssetTypeInput" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.property.useAssetTypeInput"></a>

```typescript
public readonly useAssetTypeInput: IResolvable | DatazonePolicyGrantDetailUseAssetType[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailUseAssetType">DatazonePolicyGrantDetailUseAssetType</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DatazonePolicyGrantDetail;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetail">DatazonePolicyGrantDetail</a>

---


### DatazonePolicyGrantDetailOverrideDomainUnitOwnersList <a name="DatazonePolicyGrantDetailOverrideDomainUnitOwnersList" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwnersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwnersList.Initializer"></a>

```typescript
import { datazonePolicyGrant } from '@cdktn/provider-aws'

new datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwnersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwnersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwnersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwnersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwnersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwnersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwnersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwnersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwnersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwnersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwnersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwnersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwnersList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwnersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwnersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwnersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwnersList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwnersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwnersList.get"></a>

```typescript
public get(index: number): DatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwnersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwnersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwnersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwnersList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwners">DatazonePolicyGrantDetailOverrideDomainUnitOwners</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwnersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwnersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwnersList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DatazonePolicyGrantDetailOverrideDomainUnitOwners[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwners">DatazonePolicyGrantDetailOverrideDomainUnitOwners</a>[]

---


### DatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference <a name="DatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference.Initializer"></a>

```typescript
import { datazonePolicyGrant } from '@cdktn/provider-aws'

new datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference.resetIncludeChildDomainUnits">resetIncludeChildDomainUnits</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIncludeChildDomainUnits` <a name="resetIncludeChildDomainUnits" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference.resetIncludeChildDomainUnits"></a>

```typescript
public resetIncludeChildDomainUnits(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference.property.includeChildDomainUnitsInput">includeChildDomainUnitsInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference.property.includeChildDomainUnits">includeChildDomainUnits</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwners">DatazonePolicyGrantDetailOverrideDomainUnitOwners</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `includeChildDomainUnitsInput`<sup>Optional</sup> <a name="includeChildDomainUnitsInput" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference.property.includeChildDomainUnitsInput"></a>

```typescript
public readonly includeChildDomainUnitsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `includeChildDomainUnits`<sup>Required</sup> <a name="includeChildDomainUnits" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference.property.includeChildDomainUnits"></a>

```typescript
public readonly includeChildDomainUnits: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwnersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DatazonePolicyGrantDetailOverrideDomainUnitOwners;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideDomainUnitOwners">DatazonePolicyGrantDetailOverrideDomainUnitOwners</a>

---


### DatazonePolicyGrantDetailOverrideProjectOwnersList <a name="DatazonePolicyGrantDetailOverrideProjectOwnersList" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwnersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwnersList.Initializer"></a>

```typescript
import { datazonePolicyGrant } from '@cdktn/provider-aws'

new datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwnersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwnersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwnersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwnersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwnersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwnersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwnersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwnersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwnersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwnersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwnersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwnersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwnersList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwnersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwnersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwnersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwnersList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwnersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwnersList.get"></a>

```typescript
public get(index: number): DatazonePolicyGrantDetailOverrideProjectOwnersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwnersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwnersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwnersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwnersList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwners">DatazonePolicyGrantDetailOverrideProjectOwners</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwnersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwnersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwnersList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DatazonePolicyGrantDetailOverrideProjectOwners[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwners">DatazonePolicyGrantDetailOverrideProjectOwners</a>[]

---


### DatazonePolicyGrantDetailOverrideProjectOwnersOutputReference <a name="DatazonePolicyGrantDetailOverrideProjectOwnersOutputReference" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwnersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwnersOutputReference.Initializer"></a>

```typescript
import { datazonePolicyGrant } from '@cdktn/provider-aws'

new datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwnersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwnersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwnersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwnersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwnersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwnersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwnersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwnersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwnersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwnersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwnersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwnersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwnersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwnersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwnersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwnersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwnersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwnersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwnersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwnersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwnersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwnersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwnersOutputReference.resetIncludeChildDomainUnits">resetIncludeChildDomainUnits</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwnersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwnersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwnersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwnersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwnersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwnersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwnersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwnersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwnersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwnersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwnersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwnersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwnersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwnersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwnersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwnersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwnersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwnersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwnersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwnersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwnersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwnersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwnersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwnersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIncludeChildDomainUnits` <a name="resetIncludeChildDomainUnits" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwnersOutputReference.resetIncludeChildDomainUnits"></a>

```typescript
public resetIncludeChildDomainUnits(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwnersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwnersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwnersOutputReference.property.includeChildDomainUnitsInput">includeChildDomainUnitsInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwnersOutputReference.property.includeChildDomainUnits">includeChildDomainUnits</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwnersOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwners">DatazonePolicyGrantDetailOverrideProjectOwners</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwnersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwnersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `includeChildDomainUnitsInput`<sup>Optional</sup> <a name="includeChildDomainUnitsInput" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwnersOutputReference.property.includeChildDomainUnitsInput"></a>

```typescript
public readonly includeChildDomainUnitsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `includeChildDomainUnits`<sup>Required</sup> <a name="includeChildDomainUnits" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwnersOutputReference.property.includeChildDomainUnits"></a>

```typescript
public readonly includeChildDomainUnits: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwnersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DatazonePolicyGrantDetailOverrideProjectOwners;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailOverrideProjectOwners">DatazonePolicyGrantDetailOverrideProjectOwners</a>

---


### DatazonePolicyGrantDetailUseAssetTypeList <a name="DatazonePolicyGrantDetailUseAssetTypeList" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailUseAssetTypeList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailUseAssetTypeList.Initializer"></a>

```typescript
import { datazonePolicyGrant } from '@cdktn/provider-aws'

new datazonePolicyGrant.DatazonePolicyGrantDetailUseAssetTypeList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailUseAssetTypeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailUseAssetTypeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailUseAssetTypeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailUseAssetTypeList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailUseAssetTypeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailUseAssetTypeList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailUseAssetTypeList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailUseAssetTypeList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailUseAssetTypeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailUseAssetTypeList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailUseAssetTypeList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailUseAssetTypeList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailUseAssetTypeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailUseAssetTypeList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailUseAssetTypeList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailUseAssetTypeList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailUseAssetTypeList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailUseAssetTypeList.get"></a>

```typescript
public get(index: number): DatazonePolicyGrantDetailUseAssetTypeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailUseAssetTypeList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailUseAssetTypeList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailUseAssetTypeList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailUseAssetTypeList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailUseAssetType">DatazonePolicyGrantDetailUseAssetType</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailUseAssetTypeList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailUseAssetTypeList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailUseAssetTypeList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DatazonePolicyGrantDetailUseAssetType[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailUseAssetType">DatazonePolicyGrantDetailUseAssetType</a>[]

---


### DatazonePolicyGrantDetailUseAssetTypeOutputReference <a name="DatazonePolicyGrantDetailUseAssetTypeOutputReference" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailUseAssetTypeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailUseAssetTypeOutputReference.Initializer"></a>

```typescript
import { datazonePolicyGrant } from '@cdktn/provider-aws'

new datazonePolicyGrant.DatazonePolicyGrantDetailUseAssetTypeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailUseAssetTypeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailUseAssetTypeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailUseAssetTypeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailUseAssetTypeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailUseAssetTypeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailUseAssetTypeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailUseAssetTypeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailUseAssetTypeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailUseAssetTypeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailUseAssetTypeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailUseAssetTypeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailUseAssetTypeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailUseAssetTypeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailUseAssetTypeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailUseAssetTypeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailUseAssetTypeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailUseAssetTypeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailUseAssetTypeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailUseAssetTypeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailUseAssetTypeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailUseAssetTypeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailUseAssetTypeOutputReference.resetDomainUnitId">resetDomainUnitId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailUseAssetTypeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailUseAssetTypeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailUseAssetTypeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailUseAssetTypeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailUseAssetTypeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailUseAssetTypeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailUseAssetTypeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailUseAssetTypeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailUseAssetTypeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailUseAssetTypeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailUseAssetTypeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailUseAssetTypeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailUseAssetTypeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailUseAssetTypeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailUseAssetTypeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailUseAssetTypeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailUseAssetTypeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailUseAssetTypeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailUseAssetTypeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailUseAssetTypeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailUseAssetTypeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailUseAssetTypeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailUseAssetTypeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailUseAssetTypeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDomainUnitId` <a name="resetDomainUnitId" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailUseAssetTypeOutputReference.resetDomainUnitId"></a>

```typescript
public resetDomainUnitId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailUseAssetTypeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailUseAssetTypeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailUseAssetTypeOutputReference.property.domainUnitIdInput">domainUnitIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailUseAssetTypeOutputReference.property.domainUnitId">domainUnitId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailUseAssetTypeOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailUseAssetType">DatazonePolicyGrantDetailUseAssetType</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailUseAssetTypeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailUseAssetTypeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `domainUnitIdInput`<sup>Optional</sup> <a name="domainUnitIdInput" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailUseAssetTypeOutputReference.property.domainUnitIdInput"></a>

```typescript
public readonly domainUnitIdInput: string;
```

- *Type:* string

---

##### `domainUnitId`<sup>Required</sup> <a name="domainUnitId" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailUseAssetTypeOutputReference.property.domainUnitId"></a>

```typescript
public readonly domainUnitId: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailUseAssetTypeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DatazonePolicyGrantDetailUseAssetType;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantDetailUseAssetType">DatazonePolicyGrantDetailUseAssetType</a>

---


### DatazonePolicyGrantPrincipalDomainUnitAllDomainUnitsGrantFilterList <a name="DatazonePolicyGrantPrincipalDomainUnitAllDomainUnitsGrantFilterList" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitAllDomainUnitsGrantFilterList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitAllDomainUnitsGrantFilterList.Initializer"></a>

```typescript
import { datazonePolicyGrant } from '@cdktn/provider-aws'

new datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitAllDomainUnitsGrantFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitAllDomainUnitsGrantFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitAllDomainUnitsGrantFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitAllDomainUnitsGrantFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitAllDomainUnitsGrantFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitAllDomainUnitsGrantFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitAllDomainUnitsGrantFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitAllDomainUnitsGrantFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitAllDomainUnitsGrantFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitAllDomainUnitsGrantFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitAllDomainUnitsGrantFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitAllDomainUnitsGrantFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitAllDomainUnitsGrantFilterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitAllDomainUnitsGrantFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitAllDomainUnitsGrantFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitAllDomainUnitsGrantFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitAllDomainUnitsGrantFilterList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitAllDomainUnitsGrantFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitAllDomainUnitsGrantFilterList.get"></a>

```typescript
public get(index: number): DatazonePolicyGrantPrincipalDomainUnitAllDomainUnitsGrantFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitAllDomainUnitsGrantFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitAllDomainUnitsGrantFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitAllDomainUnitsGrantFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitAllDomainUnitsGrantFilterList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitAllDomainUnitsGrantFilter">DatazonePolicyGrantPrincipalDomainUnitAllDomainUnitsGrantFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitAllDomainUnitsGrantFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitAllDomainUnitsGrantFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitAllDomainUnitsGrantFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DatazonePolicyGrantPrincipalDomainUnitAllDomainUnitsGrantFilter[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitAllDomainUnitsGrantFilter">DatazonePolicyGrantPrincipalDomainUnitAllDomainUnitsGrantFilter</a>[]

---


### DatazonePolicyGrantPrincipalDomainUnitAllDomainUnitsGrantFilterOutputReference <a name="DatazonePolicyGrantPrincipalDomainUnitAllDomainUnitsGrantFilterOutputReference" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitAllDomainUnitsGrantFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitAllDomainUnitsGrantFilterOutputReference.Initializer"></a>

```typescript
import { datazonePolicyGrant } from '@cdktn/provider-aws'

new datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitAllDomainUnitsGrantFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitAllDomainUnitsGrantFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitAllDomainUnitsGrantFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitAllDomainUnitsGrantFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitAllDomainUnitsGrantFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitAllDomainUnitsGrantFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitAllDomainUnitsGrantFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitAllDomainUnitsGrantFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitAllDomainUnitsGrantFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitAllDomainUnitsGrantFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitAllDomainUnitsGrantFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitAllDomainUnitsGrantFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitAllDomainUnitsGrantFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitAllDomainUnitsGrantFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitAllDomainUnitsGrantFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitAllDomainUnitsGrantFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitAllDomainUnitsGrantFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitAllDomainUnitsGrantFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitAllDomainUnitsGrantFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitAllDomainUnitsGrantFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitAllDomainUnitsGrantFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitAllDomainUnitsGrantFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitAllDomainUnitsGrantFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitAllDomainUnitsGrantFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitAllDomainUnitsGrantFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitAllDomainUnitsGrantFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitAllDomainUnitsGrantFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitAllDomainUnitsGrantFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitAllDomainUnitsGrantFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitAllDomainUnitsGrantFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitAllDomainUnitsGrantFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitAllDomainUnitsGrantFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitAllDomainUnitsGrantFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitAllDomainUnitsGrantFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitAllDomainUnitsGrantFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitAllDomainUnitsGrantFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitAllDomainUnitsGrantFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitAllDomainUnitsGrantFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitAllDomainUnitsGrantFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitAllDomainUnitsGrantFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitAllDomainUnitsGrantFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitAllDomainUnitsGrantFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitAllDomainUnitsGrantFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitAllDomainUnitsGrantFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitAllDomainUnitsGrantFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitAllDomainUnitsGrantFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitAllDomainUnitsGrantFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitAllDomainUnitsGrantFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitAllDomainUnitsGrantFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitAllDomainUnitsGrantFilter">DatazonePolicyGrantPrincipalDomainUnitAllDomainUnitsGrantFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitAllDomainUnitsGrantFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitAllDomainUnitsGrantFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitAllDomainUnitsGrantFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DatazonePolicyGrantPrincipalDomainUnitAllDomainUnitsGrantFilter;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitAllDomainUnitsGrantFilter">DatazonePolicyGrantPrincipalDomainUnitAllDomainUnitsGrantFilter</a>

---


### DatazonePolicyGrantPrincipalDomainUnitList <a name="DatazonePolicyGrantPrincipalDomainUnitList" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitList.Initializer"></a>

```typescript
import { datazonePolicyGrant } from '@cdktn/provider-aws'

new datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitList.get"></a>

```typescript
public get(index: number): DatazonePolicyGrantPrincipalDomainUnitOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnit">DatazonePolicyGrantPrincipalDomainUnit</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DatazonePolicyGrantPrincipalDomainUnit[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnit">DatazonePolicyGrantPrincipalDomainUnit</a>[]

---


### DatazonePolicyGrantPrincipalDomainUnitOutputReference <a name="DatazonePolicyGrantPrincipalDomainUnitOutputReference" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitOutputReference.Initializer"></a>

```typescript
import { datazonePolicyGrant } from '@cdktn/provider-aws'

new datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitOutputReference.putAllDomainUnitsGrantFilter">putAllDomainUnitsGrantFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitOutputReference.resetAllDomainUnitsGrantFilter">resetAllDomainUnitsGrantFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitOutputReference.resetDomainUnitIdentifier">resetDomainUnitIdentifier</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAllDomainUnitsGrantFilter` <a name="putAllDomainUnitsGrantFilter" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitOutputReference.putAllDomainUnitsGrantFilter"></a>

```typescript
public putAllDomainUnitsGrantFilter(value: IResolvable | DatazonePolicyGrantPrincipalDomainUnitAllDomainUnitsGrantFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitOutputReference.putAllDomainUnitsGrantFilter.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitAllDomainUnitsGrantFilter">DatazonePolicyGrantPrincipalDomainUnitAllDomainUnitsGrantFilter</a>[]

---

##### `resetAllDomainUnitsGrantFilter` <a name="resetAllDomainUnitsGrantFilter" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitOutputReference.resetAllDomainUnitsGrantFilter"></a>

```typescript
public resetAllDomainUnitsGrantFilter(): void
```

##### `resetDomainUnitIdentifier` <a name="resetDomainUnitIdentifier" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitOutputReference.resetDomainUnitIdentifier"></a>

```typescript
public resetDomainUnitIdentifier(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitOutputReference.property.allDomainUnitsGrantFilter">allDomainUnitsGrantFilter</a></code> | <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitAllDomainUnitsGrantFilterList">DatazonePolicyGrantPrincipalDomainUnitAllDomainUnitsGrantFilterList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitOutputReference.property.allDomainUnitsGrantFilterInput">allDomainUnitsGrantFilterInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitAllDomainUnitsGrantFilter">DatazonePolicyGrantPrincipalDomainUnitAllDomainUnitsGrantFilter</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitOutputReference.property.domainUnitDesignationInput">domainUnitDesignationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitOutputReference.property.domainUnitIdentifierInput">domainUnitIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitOutputReference.property.domainUnitDesignation">domainUnitDesignation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitOutputReference.property.domainUnitIdentifier">domainUnitIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnit">DatazonePolicyGrantPrincipalDomainUnit</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `allDomainUnitsGrantFilter`<sup>Required</sup> <a name="allDomainUnitsGrantFilter" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitOutputReference.property.allDomainUnitsGrantFilter"></a>

```typescript
public readonly allDomainUnitsGrantFilter: DatazonePolicyGrantPrincipalDomainUnitAllDomainUnitsGrantFilterList;
```

- *Type:* <a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitAllDomainUnitsGrantFilterList">DatazonePolicyGrantPrincipalDomainUnitAllDomainUnitsGrantFilterList</a>

---

##### `allDomainUnitsGrantFilterInput`<sup>Optional</sup> <a name="allDomainUnitsGrantFilterInput" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitOutputReference.property.allDomainUnitsGrantFilterInput"></a>

```typescript
public readonly allDomainUnitsGrantFilterInput: IResolvable | DatazonePolicyGrantPrincipalDomainUnitAllDomainUnitsGrantFilter[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitAllDomainUnitsGrantFilter">DatazonePolicyGrantPrincipalDomainUnitAllDomainUnitsGrantFilter</a>[]

---

##### `domainUnitDesignationInput`<sup>Optional</sup> <a name="domainUnitDesignationInput" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitOutputReference.property.domainUnitDesignationInput"></a>

```typescript
public readonly domainUnitDesignationInput: string;
```

- *Type:* string

---

##### `domainUnitIdentifierInput`<sup>Optional</sup> <a name="domainUnitIdentifierInput" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitOutputReference.property.domainUnitIdentifierInput"></a>

```typescript
public readonly domainUnitIdentifierInput: string;
```

- *Type:* string

---

##### `domainUnitDesignation`<sup>Required</sup> <a name="domainUnitDesignation" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitOutputReference.property.domainUnitDesignation"></a>

```typescript
public readonly domainUnitDesignation: string;
```

- *Type:* string

---

##### `domainUnitIdentifier`<sup>Required</sup> <a name="domainUnitIdentifier" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitOutputReference.property.domainUnitIdentifier"></a>

```typescript
public readonly domainUnitIdentifier: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DatazonePolicyGrantPrincipalDomainUnit;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnit">DatazonePolicyGrantPrincipalDomainUnit</a>

---


### DatazonePolicyGrantPrincipalGroupList <a name="DatazonePolicyGrantPrincipalGroupList" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroupList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroupList.Initializer"></a>

```typescript
import { datazonePolicyGrant } from '@cdktn/provider-aws'

new datazonePolicyGrant.DatazonePolicyGrantPrincipalGroupList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroupList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroupList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroupList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroupList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroupList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroupList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroupList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroupList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroupList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroupList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroupList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroupList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroupList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroupList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroupList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroupList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroupList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroupList.get"></a>

```typescript
public get(index: number): DatazonePolicyGrantPrincipalGroupOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroupList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroupList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroupList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroupList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroup">DatazonePolicyGrantPrincipalGroup</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroupList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroupList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroupList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DatazonePolicyGrantPrincipalGroup[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroup">DatazonePolicyGrantPrincipalGroup</a>[]

---


### DatazonePolicyGrantPrincipalGroupOutputReference <a name="DatazonePolicyGrantPrincipalGroupOutputReference" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroupOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroupOutputReference.Initializer"></a>

```typescript
import { datazonePolicyGrant } from '@cdktn/provider-aws'

new datazonePolicyGrant.DatazonePolicyGrantPrincipalGroupOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroupOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroupOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroupOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroupOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroupOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroupOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroupOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroupOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroupOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroupOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroupOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroupOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroupOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroupOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroupOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroupOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroupOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroupOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroupOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroupOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroupOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroupOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroupOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroupOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroupOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroupOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroupOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroupOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroupOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroupOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroupOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroupOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroupOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroupOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroupOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroupOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroupOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroupOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroupOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroupOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroupOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroupOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroupOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroupOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroupOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroupOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroupOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroupOutputReference.property.groupIdentifierInput">groupIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroupOutputReference.property.groupIdentifier">groupIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroupOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroup">DatazonePolicyGrantPrincipalGroup</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroupOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroupOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `groupIdentifierInput`<sup>Optional</sup> <a name="groupIdentifierInput" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroupOutputReference.property.groupIdentifierInput"></a>

```typescript
public readonly groupIdentifierInput: string;
```

- *Type:* string

---

##### `groupIdentifier`<sup>Required</sup> <a name="groupIdentifier" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroupOutputReference.property.groupIdentifier"></a>

```typescript
public readonly groupIdentifier: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroupOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DatazonePolicyGrantPrincipalGroup;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroup">DatazonePolicyGrantPrincipalGroup</a>

---


### DatazonePolicyGrantPrincipalList <a name="DatazonePolicyGrantPrincipalList" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalList.Initializer"></a>

```typescript
import { datazonePolicyGrant } from '@cdktn/provider-aws'

new datazonePolicyGrant.DatazonePolicyGrantPrincipalList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalList.get"></a>

```typescript
public get(index: number): DatazonePolicyGrantPrincipalOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipal">DatazonePolicyGrantPrincipal</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DatazonePolicyGrantPrincipal[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipal">DatazonePolicyGrantPrincipal</a>[]

---


### DatazonePolicyGrantPrincipalOutputReference <a name="DatazonePolicyGrantPrincipalOutputReference" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.Initializer"></a>

```typescript
import { datazonePolicyGrant } from '@cdktn/provider-aws'

new datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.putDomainUnit">putDomainUnit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.putGroup">putGroup</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.putProject">putProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.putUser">putUser</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.resetDomainUnit">resetDomainUnit</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.resetGroup">resetGroup</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.resetUser">resetUser</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDomainUnit` <a name="putDomainUnit" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.putDomainUnit"></a>

```typescript
public putDomainUnit(value: IResolvable | DatazonePolicyGrantPrincipalDomainUnit[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.putDomainUnit.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnit">DatazonePolicyGrantPrincipalDomainUnit</a>[]

---

##### `putGroup` <a name="putGroup" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.putGroup"></a>

```typescript
public putGroup(value: IResolvable | DatazonePolicyGrantPrincipalGroup[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.putGroup.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroup">DatazonePolicyGrantPrincipalGroup</a>[]

---

##### `putProject` <a name="putProject" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.putProject"></a>

```typescript
public putProject(value: IResolvable | DatazonePolicyGrantPrincipalProject[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.putProject.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProject">DatazonePolicyGrantPrincipalProject</a>[]

---

##### `putUser` <a name="putUser" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.putUser"></a>

```typescript
public putUser(value: IResolvable | DatazonePolicyGrantPrincipalUser[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.putUser.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUser">DatazonePolicyGrantPrincipalUser</a>[]

---

##### `resetDomainUnit` <a name="resetDomainUnit" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.resetDomainUnit"></a>

```typescript
public resetDomainUnit(): void
```

##### `resetGroup` <a name="resetGroup" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.resetGroup"></a>

```typescript
public resetGroup(): void
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetUser` <a name="resetUser" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.resetUser"></a>

```typescript
public resetUser(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.property.domainUnit">domainUnit</a></code> | <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitList">DatazonePolicyGrantPrincipalDomainUnitList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.property.group">group</a></code> | <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroupList">DatazonePolicyGrantPrincipalGroupList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.property.project">project</a></code> | <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectList">DatazonePolicyGrantPrincipalProjectList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.property.user">user</a></code> | <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserList">DatazonePolicyGrantPrincipalUserList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.property.domainUnitInput">domainUnitInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnit">DatazonePolicyGrantPrincipalDomainUnit</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.property.groupInput">groupInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroup">DatazonePolicyGrantPrincipalGroup</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.property.projectInput">projectInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProject">DatazonePolicyGrantPrincipalProject</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.property.userInput">userInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUser">DatazonePolicyGrantPrincipalUser</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipal">DatazonePolicyGrantPrincipal</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `domainUnit`<sup>Required</sup> <a name="domainUnit" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.property.domainUnit"></a>

```typescript
public readonly domainUnit: DatazonePolicyGrantPrincipalDomainUnitList;
```

- *Type:* <a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnitList">DatazonePolicyGrantPrincipalDomainUnitList</a>

---

##### `group`<sup>Required</sup> <a name="group" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.property.group"></a>

```typescript
public readonly group: DatazonePolicyGrantPrincipalGroupList;
```

- *Type:* <a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroupList">DatazonePolicyGrantPrincipalGroupList</a>

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.property.project"></a>

```typescript
public readonly project: DatazonePolicyGrantPrincipalProjectList;
```

- *Type:* <a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectList">DatazonePolicyGrantPrincipalProjectList</a>

---

##### `user`<sup>Required</sup> <a name="user" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.property.user"></a>

```typescript
public readonly user: DatazonePolicyGrantPrincipalUserList;
```

- *Type:* <a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserList">DatazonePolicyGrantPrincipalUserList</a>

---

##### `domainUnitInput`<sup>Optional</sup> <a name="domainUnitInput" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.property.domainUnitInput"></a>

```typescript
public readonly domainUnitInput: IResolvable | DatazonePolicyGrantPrincipalDomainUnit[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalDomainUnit">DatazonePolicyGrantPrincipalDomainUnit</a>[]

---

##### `groupInput`<sup>Optional</sup> <a name="groupInput" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.property.groupInput"></a>

```typescript
public readonly groupInput: IResolvable | DatazonePolicyGrantPrincipalGroup[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalGroup">DatazonePolicyGrantPrincipalGroup</a>[]

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.property.projectInput"></a>

```typescript
public readonly projectInput: IResolvable | DatazonePolicyGrantPrincipalProject[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProject">DatazonePolicyGrantPrincipalProject</a>[]

---

##### `userInput`<sup>Optional</sup> <a name="userInput" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.property.userInput"></a>

```typescript
public readonly userInput: IResolvable | DatazonePolicyGrantPrincipalUser[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUser">DatazonePolicyGrantPrincipalUser</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DatazonePolicyGrantPrincipal;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipal">DatazonePolicyGrantPrincipal</a>

---


### DatazonePolicyGrantPrincipalProjectDomainUnitFilterList <a name="DatazonePolicyGrantPrincipalProjectDomainUnitFilterList" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectDomainUnitFilterList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectDomainUnitFilterList.Initializer"></a>

```typescript
import { datazonePolicyGrant } from '@cdktn/provider-aws'

new datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectDomainUnitFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectDomainUnitFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectDomainUnitFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectDomainUnitFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectDomainUnitFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectDomainUnitFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectDomainUnitFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectDomainUnitFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectDomainUnitFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectDomainUnitFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectDomainUnitFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectDomainUnitFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectDomainUnitFilterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectDomainUnitFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectDomainUnitFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectDomainUnitFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectDomainUnitFilterList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectDomainUnitFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectDomainUnitFilterList.get"></a>

```typescript
public get(index: number): DatazonePolicyGrantPrincipalProjectDomainUnitFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectDomainUnitFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectDomainUnitFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectDomainUnitFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectDomainUnitFilterList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectDomainUnitFilter">DatazonePolicyGrantPrincipalProjectDomainUnitFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectDomainUnitFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectDomainUnitFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectDomainUnitFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DatazonePolicyGrantPrincipalProjectDomainUnitFilter[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectDomainUnitFilter">DatazonePolicyGrantPrincipalProjectDomainUnitFilter</a>[]

---


### DatazonePolicyGrantPrincipalProjectDomainUnitFilterOutputReference <a name="DatazonePolicyGrantPrincipalProjectDomainUnitFilterOutputReference" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectDomainUnitFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectDomainUnitFilterOutputReference.Initializer"></a>

```typescript
import { datazonePolicyGrant } from '@cdktn/provider-aws'

new datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectDomainUnitFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectDomainUnitFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectDomainUnitFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectDomainUnitFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectDomainUnitFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectDomainUnitFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectDomainUnitFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectDomainUnitFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectDomainUnitFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectDomainUnitFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectDomainUnitFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectDomainUnitFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectDomainUnitFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectDomainUnitFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectDomainUnitFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectDomainUnitFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectDomainUnitFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectDomainUnitFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectDomainUnitFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectDomainUnitFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectDomainUnitFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectDomainUnitFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectDomainUnitFilterOutputReference.resetIncludeChildDomainUnits">resetIncludeChildDomainUnits</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectDomainUnitFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectDomainUnitFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectDomainUnitFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectDomainUnitFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectDomainUnitFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectDomainUnitFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectDomainUnitFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectDomainUnitFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectDomainUnitFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectDomainUnitFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectDomainUnitFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectDomainUnitFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectDomainUnitFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectDomainUnitFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectDomainUnitFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectDomainUnitFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectDomainUnitFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectDomainUnitFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectDomainUnitFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectDomainUnitFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectDomainUnitFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectDomainUnitFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectDomainUnitFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectDomainUnitFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIncludeChildDomainUnits` <a name="resetIncludeChildDomainUnits" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectDomainUnitFilterOutputReference.resetIncludeChildDomainUnits"></a>

```typescript
public resetIncludeChildDomainUnits(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectDomainUnitFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectDomainUnitFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectDomainUnitFilterOutputReference.property.domainUnitInput">domainUnitInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectDomainUnitFilterOutputReference.property.includeChildDomainUnitsInput">includeChildDomainUnitsInput</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectDomainUnitFilterOutputReference.property.domainUnit">domainUnit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectDomainUnitFilterOutputReference.property.includeChildDomainUnits">includeChildDomainUnits</a></code> | <code>boolean \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectDomainUnitFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectDomainUnitFilter">DatazonePolicyGrantPrincipalProjectDomainUnitFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectDomainUnitFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectDomainUnitFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `domainUnitInput`<sup>Optional</sup> <a name="domainUnitInput" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectDomainUnitFilterOutputReference.property.domainUnitInput"></a>

```typescript
public readonly domainUnitInput: string;
```

- *Type:* string

---

##### `includeChildDomainUnitsInput`<sup>Optional</sup> <a name="includeChildDomainUnitsInput" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectDomainUnitFilterOutputReference.property.includeChildDomainUnitsInput"></a>

```typescript
public readonly includeChildDomainUnitsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `domainUnit`<sup>Required</sup> <a name="domainUnit" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectDomainUnitFilterOutputReference.property.domainUnit"></a>

```typescript
public readonly domainUnit: string;
```

- *Type:* string

---

##### `includeChildDomainUnits`<sup>Required</sup> <a name="includeChildDomainUnits" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectDomainUnitFilterOutputReference.property.includeChildDomainUnits"></a>

```typescript
public readonly includeChildDomainUnits: boolean | IResolvable;
```

- *Type:* boolean | cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectDomainUnitFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DatazonePolicyGrantPrincipalProjectDomainUnitFilter;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectDomainUnitFilter">DatazonePolicyGrantPrincipalProjectDomainUnitFilter</a>

---


### DatazonePolicyGrantPrincipalProjectList <a name="DatazonePolicyGrantPrincipalProjectList" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectList.Initializer"></a>

```typescript
import { datazonePolicyGrant } from '@cdktn/provider-aws'

new datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectList.get"></a>

```typescript
public get(index: number): DatazonePolicyGrantPrincipalProjectOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProject">DatazonePolicyGrantPrincipalProject</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DatazonePolicyGrantPrincipalProject[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProject">DatazonePolicyGrantPrincipalProject</a>[]

---


### DatazonePolicyGrantPrincipalProjectOutputReference <a name="DatazonePolicyGrantPrincipalProjectOutputReference" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectOutputReference.Initializer"></a>

```typescript
import { datazonePolicyGrant } from '@cdktn/provider-aws'

new datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectOutputReference.putDomainUnitFilter">putDomainUnitFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectOutputReference.resetDomainUnitFilter">resetDomainUnitFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectOutputReference.resetProjectIdentifier">resetProjectIdentifier</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDomainUnitFilter` <a name="putDomainUnitFilter" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectOutputReference.putDomainUnitFilter"></a>

```typescript
public putDomainUnitFilter(value: IResolvable | DatazonePolicyGrantPrincipalProjectDomainUnitFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectOutputReference.putDomainUnitFilter.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectDomainUnitFilter">DatazonePolicyGrantPrincipalProjectDomainUnitFilter</a>[]

---

##### `resetDomainUnitFilter` <a name="resetDomainUnitFilter" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectOutputReference.resetDomainUnitFilter"></a>

```typescript
public resetDomainUnitFilter(): void
```

##### `resetProjectIdentifier` <a name="resetProjectIdentifier" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectOutputReference.resetProjectIdentifier"></a>

```typescript
public resetProjectIdentifier(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectOutputReference.property.domainUnitFilter">domainUnitFilter</a></code> | <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectDomainUnitFilterList">DatazonePolicyGrantPrincipalProjectDomainUnitFilterList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectOutputReference.property.domainUnitFilterInput">domainUnitFilterInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectDomainUnitFilter">DatazonePolicyGrantPrincipalProjectDomainUnitFilter</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectOutputReference.property.projectDesignationInput">projectDesignationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectOutputReference.property.projectIdentifierInput">projectIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectOutputReference.property.projectDesignation">projectDesignation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectOutputReference.property.projectIdentifier">projectIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProject">DatazonePolicyGrantPrincipalProject</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `domainUnitFilter`<sup>Required</sup> <a name="domainUnitFilter" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectOutputReference.property.domainUnitFilter"></a>

```typescript
public readonly domainUnitFilter: DatazonePolicyGrantPrincipalProjectDomainUnitFilterList;
```

- *Type:* <a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectDomainUnitFilterList">DatazonePolicyGrantPrincipalProjectDomainUnitFilterList</a>

---

##### `domainUnitFilterInput`<sup>Optional</sup> <a name="domainUnitFilterInput" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectOutputReference.property.domainUnitFilterInput"></a>

```typescript
public readonly domainUnitFilterInput: IResolvable | DatazonePolicyGrantPrincipalProjectDomainUnitFilter[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectDomainUnitFilter">DatazonePolicyGrantPrincipalProjectDomainUnitFilter</a>[]

---

##### `projectDesignationInput`<sup>Optional</sup> <a name="projectDesignationInput" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectOutputReference.property.projectDesignationInput"></a>

```typescript
public readonly projectDesignationInput: string;
```

- *Type:* string

---

##### `projectIdentifierInput`<sup>Optional</sup> <a name="projectIdentifierInput" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectOutputReference.property.projectIdentifierInput"></a>

```typescript
public readonly projectIdentifierInput: string;
```

- *Type:* string

---

##### `projectDesignation`<sup>Required</sup> <a name="projectDesignation" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectOutputReference.property.projectDesignation"></a>

```typescript
public readonly projectDesignation: string;
```

- *Type:* string

---

##### `projectIdentifier`<sup>Required</sup> <a name="projectIdentifier" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectOutputReference.property.projectIdentifier"></a>

```typescript
public readonly projectIdentifier: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProjectOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DatazonePolicyGrantPrincipalProject;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalProject">DatazonePolicyGrantPrincipalProject</a>

---


### DatazonePolicyGrantPrincipalUserAllUsersGrantFilterList <a name="DatazonePolicyGrantPrincipalUserAllUsersGrantFilterList" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserAllUsersGrantFilterList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserAllUsersGrantFilterList.Initializer"></a>

```typescript
import { datazonePolicyGrant } from '@cdktn/provider-aws'

new datazonePolicyGrant.DatazonePolicyGrantPrincipalUserAllUsersGrantFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserAllUsersGrantFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserAllUsersGrantFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserAllUsersGrantFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserAllUsersGrantFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserAllUsersGrantFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserAllUsersGrantFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserAllUsersGrantFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserAllUsersGrantFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserAllUsersGrantFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserAllUsersGrantFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserAllUsersGrantFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserAllUsersGrantFilterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserAllUsersGrantFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserAllUsersGrantFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserAllUsersGrantFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserAllUsersGrantFilterList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserAllUsersGrantFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserAllUsersGrantFilterList.get"></a>

```typescript
public get(index: number): DatazonePolicyGrantPrincipalUserAllUsersGrantFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserAllUsersGrantFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserAllUsersGrantFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserAllUsersGrantFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserAllUsersGrantFilterList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserAllUsersGrantFilter">DatazonePolicyGrantPrincipalUserAllUsersGrantFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserAllUsersGrantFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserAllUsersGrantFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserAllUsersGrantFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DatazonePolicyGrantPrincipalUserAllUsersGrantFilter[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserAllUsersGrantFilter">DatazonePolicyGrantPrincipalUserAllUsersGrantFilter</a>[]

---


### DatazonePolicyGrantPrincipalUserAllUsersGrantFilterOutputReference <a name="DatazonePolicyGrantPrincipalUserAllUsersGrantFilterOutputReference" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserAllUsersGrantFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserAllUsersGrantFilterOutputReference.Initializer"></a>

```typescript
import { datazonePolicyGrant } from '@cdktn/provider-aws'

new datazonePolicyGrant.DatazonePolicyGrantPrincipalUserAllUsersGrantFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserAllUsersGrantFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserAllUsersGrantFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserAllUsersGrantFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserAllUsersGrantFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserAllUsersGrantFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserAllUsersGrantFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserAllUsersGrantFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserAllUsersGrantFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserAllUsersGrantFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserAllUsersGrantFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserAllUsersGrantFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserAllUsersGrantFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserAllUsersGrantFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserAllUsersGrantFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserAllUsersGrantFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserAllUsersGrantFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserAllUsersGrantFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserAllUsersGrantFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserAllUsersGrantFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserAllUsersGrantFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserAllUsersGrantFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserAllUsersGrantFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserAllUsersGrantFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserAllUsersGrantFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserAllUsersGrantFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserAllUsersGrantFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserAllUsersGrantFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserAllUsersGrantFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserAllUsersGrantFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserAllUsersGrantFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserAllUsersGrantFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserAllUsersGrantFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserAllUsersGrantFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserAllUsersGrantFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserAllUsersGrantFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserAllUsersGrantFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserAllUsersGrantFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserAllUsersGrantFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserAllUsersGrantFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserAllUsersGrantFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserAllUsersGrantFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserAllUsersGrantFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserAllUsersGrantFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserAllUsersGrantFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserAllUsersGrantFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserAllUsersGrantFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserAllUsersGrantFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserAllUsersGrantFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserAllUsersGrantFilter">DatazonePolicyGrantPrincipalUserAllUsersGrantFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserAllUsersGrantFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserAllUsersGrantFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserAllUsersGrantFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DatazonePolicyGrantPrincipalUserAllUsersGrantFilter;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserAllUsersGrantFilter">DatazonePolicyGrantPrincipalUserAllUsersGrantFilter</a>

---


### DatazonePolicyGrantPrincipalUserList <a name="DatazonePolicyGrantPrincipalUserList" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserList.Initializer"></a>

```typescript
import { datazonePolicyGrant } from '@cdktn/provider-aws'

new datazonePolicyGrant.DatazonePolicyGrantPrincipalUserList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserList.get"></a>

```typescript
public get(index: number): DatazonePolicyGrantPrincipalUserOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUser">DatazonePolicyGrantPrincipalUser</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DatazonePolicyGrantPrincipalUser[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUser">DatazonePolicyGrantPrincipalUser</a>[]

---


### DatazonePolicyGrantPrincipalUserOutputReference <a name="DatazonePolicyGrantPrincipalUserOutputReference" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserOutputReference.Initializer"></a>

```typescript
import { datazonePolicyGrant } from '@cdktn/provider-aws'

new datazonePolicyGrant.DatazonePolicyGrantPrincipalUserOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserOutputReference.putAllUsersGrantFilter">putAllUsersGrantFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserOutputReference.resetAllUsersGrantFilter">resetAllUsersGrantFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserOutputReference.resetUserIdentifier">resetUserIdentifier</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAllUsersGrantFilter` <a name="putAllUsersGrantFilter" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserOutputReference.putAllUsersGrantFilter"></a>

```typescript
public putAllUsersGrantFilter(value: IResolvable | DatazonePolicyGrantPrincipalUserAllUsersGrantFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserOutputReference.putAllUsersGrantFilter.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserAllUsersGrantFilter">DatazonePolicyGrantPrincipalUserAllUsersGrantFilter</a>[]

---

##### `resetAllUsersGrantFilter` <a name="resetAllUsersGrantFilter" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserOutputReference.resetAllUsersGrantFilter"></a>

```typescript
public resetAllUsersGrantFilter(): void
```

##### `resetUserIdentifier` <a name="resetUserIdentifier" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserOutputReference.resetUserIdentifier"></a>

```typescript
public resetUserIdentifier(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserOutputReference.property.allUsersGrantFilter">allUsersGrantFilter</a></code> | <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserAllUsersGrantFilterList">DatazonePolicyGrantPrincipalUserAllUsersGrantFilterList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserOutputReference.property.allUsersGrantFilterInput">allUsersGrantFilterInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserAllUsersGrantFilter">DatazonePolicyGrantPrincipalUserAllUsersGrantFilter</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserOutputReference.property.userIdentifierInput">userIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserOutputReference.property.userIdentifier">userIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUser">DatazonePolicyGrantPrincipalUser</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `allUsersGrantFilter`<sup>Required</sup> <a name="allUsersGrantFilter" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserOutputReference.property.allUsersGrantFilter"></a>

```typescript
public readonly allUsersGrantFilter: DatazonePolicyGrantPrincipalUserAllUsersGrantFilterList;
```

- *Type:* <a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserAllUsersGrantFilterList">DatazonePolicyGrantPrincipalUserAllUsersGrantFilterList</a>

---

##### `allUsersGrantFilterInput`<sup>Optional</sup> <a name="allUsersGrantFilterInput" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserOutputReference.property.allUsersGrantFilterInput"></a>

```typescript
public readonly allUsersGrantFilterInput: IResolvable | DatazonePolicyGrantPrincipalUserAllUsersGrantFilter[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserAllUsersGrantFilter">DatazonePolicyGrantPrincipalUserAllUsersGrantFilter</a>[]

---

##### `userIdentifierInput`<sup>Optional</sup> <a name="userIdentifierInput" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserOutputReference.property.userIdentifierInput"></a>

```typescript
public readonly userIdentifierInput: string;
```

- *Type:* string

---

##### `userIdentifier`<sup>Required</sup> <a name="userIdentifier" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserOutputReference.property.userIdentifier"></a>

```typescript
public readonly userIdentifier: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUserOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DatazonePolicyGrantPrincipalUser;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.datazonePolicyGrant.DatazonePolicyGrantPrincipalUser">DatazonePolicyGrantPrincipalUser</a>

---



