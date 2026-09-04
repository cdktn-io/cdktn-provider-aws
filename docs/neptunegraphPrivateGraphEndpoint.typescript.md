# `neptunegraphPrivateGraphEndpoint` Submodule <a name="`neptunegraphPrivateGraphEndpoint` Submodule" id="@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NeptunegraphPrivateGraphEndpoint <a name="NeptunegraphPrivateGraphEndpoint" id="@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/neptunegraph_private_graph_endpoint aws_neptunegraph_private_graph_endpoint}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.Initializer"></a>

```typescript
import { neptunegraphPrivateGraphEndpoint } from '@cdktn/provider-aws'

new neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint(scope: Construct, id: string, config: NeptunegraphPrivateGraphEndpointConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpointConfig">NeptunegraphPrivateGraphEndpointConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpointConfig">NeptunegraphPrivateGraphEndpointConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.resetSubnetIds">resetSubnetIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.resetVpcSecurityGroupIds">resetVpcSecurityGroupIds</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.putTimeouts"></a>

```typescript
public putTimeouts(value: NeptunegraphPrivateGraphEndpointTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpointTimeouts">NeptunegraphPrivateGraphEndpointTimeouts</a>

---

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.resetRegion"></a>

```typescript
public resetRegion(): void
```

##### `resetSubnetIds` <a name="resetSubnetIds" id="@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.resetSubnetIds"></a>

```typescript
public resetSubnetIds(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetVpcSecurityGroupIds` <a name="resetVpcSecurityGroupIds" id="@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.resetVpcSecurityGroupIds"></a>

```typescript
public resetVpcSecurityGroupIds(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a NeptunegraphPrivateGraphEndpoint resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.isConstruct"></a>

```typescript
import { neptunegraphPrivateGraphEndpoint } from '@cdktn/provider-aws'

neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.isTerraformElement"></a>

```typescript
import { neptunegraphPrivateGraphEndpoint } from '@cdktn/provider-aws'

neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.isTerraformResource"></a>

```typescript
import { neptunegraphPrivateGraphEndpoint } from '@cdktn/provider-aws'

neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.generateConfigForImport"></a>

```typescript
import { neptunegraphPrivateGraphEndpoint } from '@cdktn/provider-aws'

neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a NeptunegraphPrivateGraphEndpoint resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the NeptunegraphPrivateGraphEndpoint to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing NeptunegraphPrivateGraphEndpoint that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/neptunegraph_private_graph_endpoint#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the NeptunegraphPrivateGraphEndpoint to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.property.privateGraphEndpointIdentifier">privateGraphEndpointIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpointTimeoutsOutputReference">NeptunegraphPrivateGraphEndpointTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.property.vpcEndpointId">vpcEndpointId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.property.graphIdentifierInput">graphIdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.property.subnetIdsInput">subnetIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpointTimeouts">NeptunegraphPrivateGraphEndpointTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.property.vpcIdInput">vpcIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.property.vpcSecurityGroupIdsInput">vpcSecurityGroupIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.property.graphIdentifier">graphIdentifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.property.subnetIds">subnetIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.property.vpcId">vpcId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.property.vpcSecurityGroupIds">vpcSecurityGroupIds</a></code> | <code>string[]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `privateGraphEndpointIdentifier`<sup>Required</sup> <a name="privateGraphEndpointIdentifier" id="@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.property.privateGraphEndpointIdentifier"></a>

```typescript
public readonly privateGraphEndpointIdentifier: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.property.timeouts"></a>

```typescript
public readonly timeouts: NeptunegraphPrivateGraphEndpointTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpointTimeoutsOutputReference">NeptunegraphPrivateGraphEndpointTimeoutsOutputReference</a>

---

##### `vpcEndpointId`<sup>Required</sup> <a name="vpcEndpointId" id="@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.property.vpcEndpointId"></a>

```typescript
public readonly vpcEndpointId: string;
```

- *Type:* string

---

##### `graphIdentifierInput`<sup>Optional</sup> <a name="graphIdentifierInput" id="@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.property.graphIdentifierInput"></a>

```typescript
public readonly graphIdentifierInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `subnetIdsInput`<sup>Optional</sup> <a name="subnetIdsInput" id="@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.property.subnetIdsInput"></a>

```typescript
public readonly subnetIdsInput: string[];
```

- *Type:* string[]

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | NeptunegraphPrivateGraphEndpointTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpointTimeouts">NeptunegraphPrivateGraphEndpointTimeouts</a>

---

##### `vpcIdInput`<sup>Optional</sup> <a name="vpcIdInput" id="@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.property.vpcIdInput"></a>

```typescript
public readonly vpcIdInput: string;
```

- *Type:* string

---

##### `vpcSecurityGroupIdsInput`<sup>Optional</sup> <a name="vpcSecurityGroupIdsInput" id="@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.property.vpcSecurityGroupIdsInput"></a>

```typescript
public readonly vpcSecurityGroupIdsInput: string[];
```

- *Type:* string[]

---

##### `graphIdentifier`<sup>Required</sup> <a name="graphIdentifier" id="@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.property.graphIdentifier"></a>

```typescript
public readonly graphIdentifier: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `subnetIds`<sup>Required</sup> <a name="subnetIds" id="@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.property.subnetIds"></a>

```typescript
public readonly subnetIds: string[];
```

- *Type:* string[]

---

##### `vpcId`<sup>Required</sup> <a name="vpcId" id="@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.property.vpcId"></a>

```typescript
public readonly vpcId: string;
```

- *Type:* string

---

##### `vpcSecurityGroupIds`<sup>Required</sup> <a name="vpcSecurityGroupIds" id="@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.property.vpcSecurityGroupIds"></a>

```typescript
public readonly vpcSecurityGroupIds: string[];
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpoint.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### NeptunegraphPrivateGraphEndpointConfig <a name="NeptunegraphPrivateGraphEndpointConfig" id="@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpointConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpointConfig.Initializer"></a>

```typescript
import { neptunegraphPrivateGraphEndpoint } from '@cdktn/provider-aws'

const neptunegraphPrivateGraphEndpointConfig: neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpointConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpointConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpointConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpointConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpointConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpointConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpointConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpointConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpointConfig.property.graphIdentifier">graphIdentifier</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/neptunegraph_private_graph_endpoint#graph_identifier NeptunegraphPrivateGraphEndpoint#graph_identifier}. |
| <code><a href="#@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpointConfig.property.vpcId">vpcId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/neptunegraph_private_graph_endpoint#vpc_id NeptunegraphPrivateGraphEndpoint#vpc_id}. |
| <code><a href="#@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpointConfig.property.region">region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpointConfig.property.subnetIds">subnetIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/neptunegraph_private_graph_endpoint#subnet_ids NeptunegraphPrivateGraphEndpoint#subnet_ids}. |
| <code><a href="#@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpointConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpointTimeouts">NeptunegraphPrivateGraphEndpointTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpointConfig.property.vpcSecurityGroupIds">vpcSecurityGroupIds</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/neptunegraph_private_graph_endpoint#vpc_security_group_ids NeptunegraphPrivateGraphEndpoint#vpc_security_group_ids}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpointConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpointConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpointConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpointConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpointConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpointConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpointConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `graphIdentifier`<sup>Required</sup> <a name="graphIdentifier" id="@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpointConfig.property.graphIdentifier"></a>

```typescript
public readonly graphIdentifier: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/neptunegraph_private_graph_endpoint#graph_identifier NeptunegraphPrivateGraphEndpoint#graph_identifier}.

---

##### `vpcId`<sup>Required</sup> <a name="vpcId" id="@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpointConfig.property.vpcId"></a>

```typescript
public readonly vpcId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/neptunegraph_private_graph_endpoint#vpc_id NeptunegraphPrivateGraphEndpoint#vpc_id}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpointConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/neptunegraph_private_graph_endpoint#region NeptunegraphPrivateGraphEndpoint#region}

---

##### `subnetIds`<sup>Optional</sup> <a name="subnetIds" id="@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpointConfig.property.subnetIds"></a>

```typescript
public readonly subnetIds: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/neptunegraph_private_graph_endpoint#subnet_ids NeptunegraphPrivateGraphEndpoint#subnet_ids}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpointConfig.property.timeouts"></a>

```typescript
public readonly timeouts: NeptunegraphPrivateGraphEndpointTimeouts;
```

- *Type:* <a href="#@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpointTimeouts">NeptunegraphPrivateGraphEndpointTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/neptunegraph_private_graph_endpoint#timeouts NeptunegraphPrivateGraphEndpoint#timeouts}

---

##### `vpcSecurityGroupIds`<sup>Optional</sup> <a name="vpcSecurityGroupIds" id="@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpointConfig.property.vpcSecurityGroupIds"></a>

```typescript
public readonly vpcSecurityGroupIds: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/neptunegraph_private_graph_endpoint#vpc_security_group_ids NeptunegraphPrivateGraphEndpoint#vpc_security_group_ids}.

---

### NeptunegraphPrivateGraphEndpointTimeouts <a name="NeptunegraphPrivateGraphEndpointTimeouts" id="@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpointTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpointTimeouts.Initializer"></a>

```typescript
import { neptunegraphPrivateGraphEndpoint } from '@cdktn/provider-aws'

const neptunegraphPrivateGraphEndpointTimeouts: neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpointTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpointTimeouts.property.create">create</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |
| <code><a href="#@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpointTimeouts.property.delete">delete</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpointTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/neptunegraph_private_graph_endpoint#create NeptunegraphPrivateGraphEndpoint#create}

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpointTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/neptunegraph_private_graph_endpoint#delete NeptunegraphPrivateGraphEndpoint#delete}

---

## Classes <a name="Classes" id="Classes"></a>

### NeptunegraphPrivateGraphEndpointTimeoutsOutputReference <a name="NeptunegraphPrivateGraphEndpointTimeoutsOutputReference" id="@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpointTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpointTimeoutsOutputReference.Initializer"></a>

```typescript
import { neptunegraphPrivateGraphEndpoint } from '@cdktn/provider-aws'

new neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpointTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpointTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpointTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpointTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpointTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpointTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpointTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpointTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpointTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpointTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpointTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpointTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpointTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpointTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpointTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpointTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpointTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpointTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpointTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpointTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpointTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpointTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpointTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpointTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpointTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpointTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpointTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpointTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpointTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpointTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpointTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpointTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpointTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpointTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpointTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpointTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpointTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpointTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpointTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpointTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpointTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpointTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpointTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpointTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpointTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpointTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpointTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpointTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpointTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpointTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpointTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpointTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpointTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpointTimeouts">NeptunegraphPrivateGraphEndpointTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpointTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpointTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpointTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpointTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpointTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpointTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpointTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | NeptunegraphPrivateGraphEndpointTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.neptunegraphPrivateGraphEndpoint.NeptunegraphPrivateGraphEndpointTimeouts">NeptunegraphPrivateGraphEndpointTimeouts</a>

---



