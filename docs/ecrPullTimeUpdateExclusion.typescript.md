# `ecrPullTimeUpdateExclusion` Submodule <a name="`ecrPullTimeUpdateExclusion` Submodule" id="@cdktn/provider-aws.ecrPullTimeUpdateExclusion"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EcrPullTimeUpdateExclusion <a name="EcrPullTimeUpdateExclusion" id="@cdktn/provider-aws.ecrPullTimeUpdateExclusion.EcrPullTimeUpdateExclusion"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/ecr_pull_time_update_exclusion aws_ecr_pull_time_update_exclusion}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.ecrPullTimeUpdateExclusion.EcrPullTimeUpdateExclusion.Initializer"></a>

```typescript
import { ecrPullTimeUpdateExclusion } from '@cdktn/provider-aws'

new ecrPullTimeUpdateExclusion.EcrPullTimeUpdateExclusion(scope: Construct, id: string, config: EcrPullTimeUpdateExclusionConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecrPullTimeUpdateExclusion.EcrPullTimeUpdateExclusion.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.ecrPullTimeUpdateExclusion.EcrPullTimeUpdateExclusion.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.ecrPullTimeUpdateExclusion.EcrPullTimeUpdateExclusion.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-aws.ecrPullTimeUpdateExclusion.EcrPullTimeUpdateExclusionConfig">EcrPullTimeUpdateExclusionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.ecrPullTimeUpdateExclusion.EcrPullTimeUpdateExclusion.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.ecrPullTimeUpdateExclusion.EcrPullTimeUpdateExclusion.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-aws.ecrPullTimeUpdateExclusion.EcrPullTimeUpdateExclusion.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.ecrPullTimeUpdateExclusion.EcrPullTimeUpdateExclusionConfig">EcrPullTimeUpdateExclusionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ecrPullTimeUpdateExclusion.EcrPullTimeUpdateExclusion.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.ecrPullTimeUpdateExclusion.EcrPullTimeUpdateExclusion.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecrPullTimeUpdateExclusion.EcrPullTimeUpdateExclusion.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.ecrPullTimeUpdateExclusion.EcrPullTimeUpdateExclusion.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.ecrPullTimeUpdateExclusion.EcrPullTimeUpdateExclusion.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecrPullTimeUpdateExclusion.EcrPullTimeUpdateExclusion.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecrPullTimeUpdateExclusion.EcrPullTimeUpdateExclusion.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.ecrPullTimeUpdateExclusion.EcrPullTimeUpdateExclusion.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.ecrPullTimeUpdateExclusion.EcrPullTimeUpdateExclusion.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecrPullTimeUpdateExclusion.EcrPullTimeUpdateExclusion.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecrPullTimeUpdateExclusion.EcrPullTimeUpdateExclusion.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecrPullTimeUpdateExclusion.EcrPullTimeUpdateExclusion.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecrPullTimeUpdateExclusion.EcrPullTimeUpdateExclusion.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecrPullTimeUpdateExclusion.EcrPullTimeUpdateExclusion.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecrPullTimeUpdateExclusion.EcrPullTimeUpdateExclusion.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecrPullTimeUpdateExclusion.EcrPullTimeUpdateExclusion.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecrPullTimeUpdateExclusion.EcrPullTimeUpdateExclusion.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecrPullTimeUpdateExclusion.EcrPullTimeUpdateExclusion.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecrPullTimeUpdateExclusion.EcrPullTimeUpdateExclusion.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecrPullTimeUpdateExclusion.EcrPullTimeUpdateExclusion.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecrPullTimeUpdateExclusion.EcrPullTimeUpdateExclusion.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.ecrPullTimeUpdateExclusion.EcrPullTimeUpdateExclusion.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.ecrPullTimeUpdateExclusion.EcrPullTimeUpdateExclusion.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.ecrPullTimeUpdateExclusion.EcrPullTimeUpdateExclusion.resetRegion">resetRegion</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.ecrPullTimeUpdateExclusion.EcrPullTimeUpdateExclusion.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktn/provider-aws.ecrPullTimeUpdateExclusion.EcrPullTimeUpdateExclusion.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.ecrPullTimeUpdateExclusion.EcrPullTimeUpdateExclusion.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.ecrPullTimeUpdateExclusion.EcrPullTimeUpdateExclusion.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-aws.ecrPullTimeUpdateExclusion.EcrPullTimeUpdateExclusion.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.ecrPullTimeUpdateExclusion.EcrPullTimeUpdateExclusion.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-aws.ecrPullTimeUpdateExclusion.EcrPullTimeUpdateExclusion.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-aws.ecrPullTimeUpdateExclusion.EcrPullTimeUpdateExclusion.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-aws.ecrPullTimeUpdateExclusion.EcrPullTimeUpdateExclusion.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-aws.ecrPullTimeUpdateExclusion.EcrPullTimeUpdateExclusion.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-aws.ecrPullTimeUpdateExclusion.EcrPullTimeUpdateExclusion.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.ecrPullTimeUpdateExclusion.EcrPullTimeUpdateExclusion.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.ecrPullTimeUpdateExclusion.EcrPullTimeUpdateExclusion.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecrPullTimeUpdateExclusion.EcrPullTimeUpdateExclusion.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.ecrPullTimeUpdateExclusion.EcrPullTimeUpdateExclusion.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecrPullTimeUpdateExclusion.EcrPullTimeUpdateExclusion.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.ecrPullTimeUpdateExclusion.EcrPullTimeUpdateExclusion.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecrPullTimeUpdateExclusion.EcrPullTimeUpdateExclusion.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.ecrPullTimeUpdateExclusion.EcrPullTimeUpdateExclusion.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecrPullTimeUpdateExclusion.EcrPullTimeUpdateExclusion.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.ecrPullTimeUpdateExclusion.EcrPullTimeUpdateExclusion.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecrPullTimeUpdateExclusion.EcrPullTimeUpdateExclusion.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.ecrPullTimeUpdateExclusion.EcrPullTimeUpdateExclusion.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecrPullTimeUpdateExclusion.EcrPullTimeUpdateExclusion.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.ecrPullTimeUpdateExclusion.EcrPullTimeUpdateExclusion.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecrPullTimeUpdateExclusion.EcrPullTimeUpdateExclusion.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.ecrPullTimeUpdateExclusion.EcrPullTimeUpdateExclusion.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecrPullTimeUpdateExclusion.EcrPullTimeUpdateExclusion.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.ecrPullTimeUpdateExclusion.EcrPullTimeUpdateExclusion.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecrPullTimeUpdateExclusion.EcrPullTimeUpdateExclusion.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-aws.ecrPullTimeUpdateExclusion.EcrPullTimeUpdateExclusion.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-aws.ecrPullTimeUpdateExclusion.EcrPullTimeUpdateExclusion.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.ecrPullTimeUpdateExclusion.EcrPullTimeUpdateExclusion.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.ecrPullTimeUpdateExclusion.EcrPullTimeUpdateExclusion.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.ecrPullTimeUpdateExclusion.EcrPullTimeUpdateExclusion.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.ecrPullTimeUpdateExclusion.EcrPullTimeUpdateExclusion.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-aws.ecrPullTimeUpdateExclusion.EcrPullTimeUpdateExclusion.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.ecrPullTimeUpdateExclusion.EcrPullTimeUpdateExclusion.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-aws.ecrPullTimeUpdateExclusion.EcrPullTimeUpdateExclusion.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.ecrPullTimeUpdateExclusion.EcrPullTimeUpdateExclusion.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.ecrPullTimeUpdateExclusion.EcrPullTimeUpdateExclusion.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-aws.ecrPullTimeUpdateExclusion.EcrPullTimeUpdateExclusion.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.ecrPullTimeUpdateExclusion.EcrPullTimeUpdateExclusion.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-aws.ecrPullTimeUpdateExclusion.EcrPullTimeUpdateExclusion.resetRegion"></a>

```typescript
public resetRegion(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.ecrPullTimeUpdateExclusion.EcrPullTimeUpdateExclusion.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.ecrPullTimeUpdateExclusion.EcrPullTimeUpdateExclusion.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecrPullTimeUpdateExclusion.EcrPullTimeUpdateExclusion.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecrPullTimeUpdateExclusion.EcrPullTimeUpdateExclusion.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a EcrPullTimeUpdateExclusion resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-aws.ecrPullTimeUpdateExclusion.EcrPullTimeUpdateExclusion.isConstruct"></a>

```typescript
import { ecrPullTimeUpdateExclusion } from '@cdktn/provider-aws'

ecrPullTimeUpdateExclusion.EcrPullTimeUpdateExclusion.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.ecrPullTimeUpdateExclusion.EcrPullTimeUpdateExclusion.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-aws.ecrPullTimeUpdateExclusion.EcrPullTimeUpdateExclusion.isTerraformElement"></a>

```typescript
import { ecrPullTimeUpdateExclusion } from '@cdktn/provider-aws'

ecrPullTimeUpdateExclusion.EcrPullTimeUpdateExclusion.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.ecrPullTimeUpdateExclusion.EcrPullTimeUpdateExclusion.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-aws.ecrPullTimeUpdateExclusion.EcrPullTimeUpdateExclusion.isTerraformResource"></a>

```typescript
import { ecrPullTimeUpdateExclusion } from '@cdktn/provider-aws'

ecrPullTimeUpdateExclusion.EcrPullTimeUpdateExclusion.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.ecrPullTimeUpdateExclusion.EcrPullTimeUpdateExclusion.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-aws.ecrPullTimeUpdateExclusion.EcrPullTimeUpdateExclusion.generateConfigForImport"></a>

```typescript
import { ecrPullTimeUpdateExclusion } from '@cdktn/provider-aws'

ecrPullTimeUpdateExclusion.EcrPullTimeUpdateExclusion.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a EcrPullTimeUpdateExclusion resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.ecrPullTimeUpdateExclusion.EcrPullTimeUpdateExclusion.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.ecrPullTimeUpdateExclusion.EcrPullTimeUpdateExclusion.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the EcrPullTimeUpdateExclusion to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.ecrPullTimeUpdateExclusion.EcrPullTimeUpdateExclusion.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing EcrPullTimeUpdateExclusion that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/ecr_pull_time_update_exclusion#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.ecrPullTimeUpdateExclusion.EcrPullTimeUpdateExclusion.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the EcrPullTimeUpdateExclusion to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecrPullTimeUpdateExclusion.EcrPullTimeUpdateExclusion.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.ecrPullTimeUpdateExclusion.EcrPullTimeUpdateExclusion.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecrPullTimeUpdateExclusion.EcrPullTimeUpdateExclusion.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecrPullTimeUpdateExclusion.EcrPullTimeUpdateExclusion.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecrPullTimeUpdateExclusion.EcrPullTimeUpdateExclusion.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecrPullTimeUpdateExclusion.EcrPullTimeUpdateExclusion.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecrPullTimeUpdateExclusion.EcrPullTimeUpdateExclusion.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecrPullTimeUpdateExclusion.EcrPullTimeUpdateExclusion.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecrPullTimeUpdateExclusion.EcrPullTimeUpdateExclusion.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecrPullTimeUpdateExclusion.EcrPullTimeUpdateExclusion.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecrPullTimeUpdateExclusion.EcrPullTimeUpdateExclusion.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecrPullTimeUpdateExclusion.EcrPullTimeUpdateExclusion.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecrPullTimeUpdateExclusion.EcrPullTimeUpdateExclusion.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecrPullTimeUpdateExclusion.EcrPullTimeUpdateExclusion.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecrPullTimeUpdateExclusion.EcrPullTimeUpdateExclusion.property.principalArnInput">principalArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecrPullTimeUpdateExclusion.EcrPullTimeUpdateExclusion.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecrPullTimeUpdateExclusion.EcrPullTimeUpdateExclusion.property.principalArn">principalArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecrPullTimeUpdateExclusion.EcrPullTimeUpdateExclusion.property.region">region</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.ecrPullTimeUpdateExclusion.EcrPullTimeUpdateExclusion.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-aws.ecrPullTimeUpdateExclusion.EcrPullTimeUpdateExclusion.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.ecrPullTimeUpdateExclusion.EcrPullTimeUpdateExclusion.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-aws.ecrPullTimeUpdateExclusion.EcrPullTimeUpdateExclusion.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-aws.ecrPullTimeUpdateExclusion.EcrPullTimeUpdateExclusion.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-aws.ecrPullTimeUpdateExclusion.EcrPullTimeUpdateExclusion.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-aws.ecrPullTimeUpdateExclusion.EcrPullTimeUpdateExclusion.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.ecrPullTimeUpdateExclusion.EcrPullTimeUpdateExclusion.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.ecrPullTimeUpdateExclusion.EcrPullTimeUpdateExclusion.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.ecrPullTimeUpdateExclusion.EcrPullTimeUpdateExclusion.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.ecrPullTimeUpdateExclusion.EcrPullTimeUpdateExclusion.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.ecrPullTimeUpdateExclusion.EcrPullTimeUpdateExclusion.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.ecrPullTimeUpdateExclusion.EcrPullTimeUpdateExclusion.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.ecrPullTimeUpdateExclusion.EcrPullTimeUpdateExclusion.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `principalArnInput`<sup>Optional</sup> <a name="principalArnInput" id="@cdktn/provider-aws.ecrPullTimeUpdateExclusion.EcrPullTimeUpdateExclusion.property.principalArnInput"></a>

```typescript
public readonly principalArnInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-aws.ecrPullTimeUpdateExclusion.EcrPullTimeUpdateExclusion.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `principalArn`<sup>Required</sup> <a name="principalArn" id="@cdktn/provider-aws.ecrPullTimeUpdateExclusion.EcrPullTimeUpdateExclusion.property.principalArn"></a>

```typescript
public readonly principalArn: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.ecrPullTimeUpdateExclusion.EcrPullTimeUpdateExclusion.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecrPullTimeUpdateExclusion.EcrPullTimeUpdateExclusion.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.ecrPullTimeUpdateExclusion.EcrPullTimeUpdateExclusion.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### EcrPullTimeUpdateExclusionConfig <a name="EcrPullTimeUpdateExclusionConfig" id="@cdktn/provider-aws.ecrPullTimeUpdateExclusion.EcrPullTimeUpdateExclusionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.ecrPullTimeUpdateExclusion.EcrPullTimeUpdateExclusionConfig.Initializer"></a>

```typescript
import { ecrPullTimeUpdateExclusion } from '@cdktn/provider-aws'

const ecrPullTimeUpdateExclusionConfig: ecrPullTimeUpdateExclusion.EcrPullTimeUpdateExclusionConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.ecrPullTimeUpdateExclusion.EcrPullTimeUpdateExclusionConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecrPullTimeUpdateExclusion.EcrPullTimeUpdateExclusionConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecrPullTimeUpdateExclusion.EcrPullTimeUpdateExclusionConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecrPullTimeUpdateExclusion.EcrPullTimeUpdateExclusionConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecrPullTimeUpdateExclusion.EcrPullTimeUpdateExclusionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecrPullTimeUpdateExclusion.EcrPullTimeUpdateExclusionConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecrPullTimeUpdateExclusion.EcrPullTimeUpdateExclusionConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.ecrPullTimeUpdateExclusion.EcrPullTimeUpdateExclusionConfig.property.principalArn">principalArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/ecr_pull_time_update_exclusion#principal_arn EcrPullTimeUpdateExclusion#principal_arn}. |
| <code><a href="#@cdktn/provider-aws.ecrPullTimeUpdateExclusion.EcrPullTimeUpdateExclusionConfig.property.region">region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.ecrPullTimeUpdateExclusion.EcrPullTimeUpdateExclusionConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.ecrPullTimeUpdateExclusion.EcrPullTimeUpdateExclusionConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.ecrPullTimeUpdateExclusion.EcrPullTimeUpdateExclusionConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.ecrPullTimeUpdateExclusion.EcrPullTimeUpdateExclusionConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.ecrPullTimeUpdateExclusion.EcrPullTimeUpdateExclusionConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.ecrPullTimeUpdateExclusion.EcrPullTimeUpdateExclusionConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.ecrPullTimeUpdateExclusion.EcrPullTimeUpdateExclusionConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `principalArn`<sup>Required</sup> <a name="principalArn" id="@cdktn/provider-aws.ecrPullTimeUpdateExclusion.EcrPullTimeUpdateExclusionConfig.property.principalArn"></a>

```typescript
public readonly principalArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/ecr_pull_time_update_exclusion#principal_arn EcrPullTimeUpdateExclusion#principal_arn}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.ecrPullTimeUpdateExclusion.EcrPullTimeUpdateExclusionConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.28.0/docs/resources/ecr_pull_time_update_exclusion#region EcrPullTimeUpdateExclusion#region}

---



