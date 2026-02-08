# `vpcSecurityGroupRulesExclusive` Submodule <a name="`vpcSecurityGroupRulesExclusive` Submodule" id="@cdktn/provider-aws.vpcSecurityGroupRulesExclusive"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VpcSecurityGroupRulesExclusive <a name="VpcSecurityGroupRulesExclusive" id="@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/vpc_security_group_rules_exclusive aws_vpc_security_group_rules_exclusive}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.Initializer"></a>

```typescript
import { vpcSecurityGroupRulesExclusive } from '@cdktn/provider-aws'

new vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive(scope: Construct, id: string, config: VpcSecurityGroupRulesExclusiveConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusiveConfig">VpcSecurityGroupRulesExclusiveConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusiveConfig">VpcSecurityGroupRulesExclusiveConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.resetRegion">resetRegion</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.resetRegion"></a>

```typescript
public resetRegion(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a VpcSecurityGroupRulesExclusive resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.isConstruct"></a>

```typescript
import { vpcSecurityGroupRulesExclusive } from '@cdktn/provider-aws'

vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.isTerraformElement"></a>

```typescript
import { vpcSecurityGroupRulesExclusive } from '@cdktn/provider-aws'

vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.isTerraformResource"></a>

```typescript
import { vpcSecurityGroupRulesExclusive } from '@cdktn/provider-aws'

vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.generateConfigForImport"></a>

```typescript
import { vpcSecurityGroupRulesExclusive } from '@cdktn/provider-aws'

vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a VpcSecurityGroupRulesExclusive resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the VpcSecurityGroupRulesExclusive to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing VpcSecurityGroupRulesExclusive that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/vpc_security_group_rules_exclusive#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the VpcSecurityGroupRulesExclusive to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.property.egressRuleIdsInput">egressRuleIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.property.ingressRuleIdsInput">ingressRuleIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.property.securityGroupIdInput">securityGroupIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.property.egressRuleIds">egressRuleIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.property.ingressRuleIds">ingressRuleIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.property.securityGroupId">securityGroupId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `egressRuleIdsInput`<sup>Optional</sup> <a name="egressRuleIdsInput" id="@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.property.egressRuleIdsInput"></a>

```typescript
public readonly egressRuleIdsInput: string[];
```

- *Type:* string[]

---

##### `ingressRuleIdsInput`<sup>Optional</sup> <a name="ingressRuleIdsInput" id="@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.property.ingressRuleIdsInput"></a>

```typescript
public readonly ingressRuleIdsInput: string[];
```

- *Type:* string[]

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `securityGroupIdInput`<sup>Optional</sup> <a name="securityGroupIdInput" id="@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.property.securityGroupIdInput"></a>

```typescript
public readonly securityGroupIdInput: string;
```

- *Type:* string

---

##### `egressRuleIds`<sup>Required</sup> <a name="egressRuleIds" id="@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.property.egressRuleIds"></a>

```typescript
public readonly egressRuleIds: string[];
```

- *Type:* string[]

---

##### `ingressRuleIds`<sup>Required</sup> <a name="ingressRuleIds" id="@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.property.ingressRuleIds"></a>

```typescript
public readonly ingressRuleIds: string[];
```

- *Type:* string[]

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `securityGroupId`<sup>Required</sup> <a name="securityGroupId" id="@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.property.securityGroupId"></a>

```typescript
public readonly securityGroupId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusive.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### VpcSecurityGroupRulesExclusiveConfig <a name="VpcSecurityGroupRulesExclusiveConfig" id="@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusiveConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusiveConfig.Initializer"></a>

```typescript
import { vpcSecurityGroupRulesExclusive } from '@cdktn/provider-aws'

const vpcSecurityGroupRulesExclusiveConfig: vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusiveConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusiveConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusiveConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusiveConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusiveConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusiveConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusiveConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusiveConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusiveConfig.property.egressRuleIds">egressRuleIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/vpc_security_group_rules_exclusive#egress_rule_ids VpcSecurityGroupRulesExclusive#egress_rule_ids}. |
| <code><a href="#@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusiveConfig.property.ingressRuleIds">ingressRuleIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/vpc_security_group_rules_exclusive#ingress_rule_ids VpcSecurityGroupRulesExclusive#ingress_rule_ids}. |
| <code><a href="#@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusiveConfig.property.securityGroupId">securityGroupId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/vpc_security_group_rules_exclusive#security_group_id VpcSecurityGroupRulesExclusive#security_group_id}. |
| <code><a href="#@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusiveConfig.property.region">region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusiveConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusiveConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusiveConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusiveConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusiveConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusiveConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusiveConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `egressRuleIds`<sup>Required</sup> <a name="egressRuleIds" id="@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusiveConfig.property.egressRuleIds"></a>

```typescript
public readonly egressRuleIds: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/vpc_security_group_rules_exclusive#egress_rule_ids VpcSecurityGroupRulesExclusive#egress_rule_ids}.

---

##### `ingressRuleIds`<sup>Required</sup> <a name="ingressRuleIds" id="@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusiveConfig.property.ingressRuleIds"></a>

```typescript
public readonly ingressRuleIds: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/vpc_security_group_rules_exclusive#ingress_rule_ids VpcSecurityGroupRulesExclusive#ingress_rule_ids}.

---

##### `securityGroupId`<sup>Required</sup> <a name="securityGroupId" id="@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusiveConfig.property.securityGroupId"></a>

```typescript
public readonly securityGroupId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/vpc_security_group_rules_exclusive#security_group_id VpcSecurityGroupRulesExclusive#security_group_id}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.vpcSecurityGroupRulesExclusive.VpcSecurityGroupRulesExclusiveConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.31.0/docs/resources/vpc_security_group_rules_exclusive#region VpcSecurityGroupRulesExclusive#region}

---



