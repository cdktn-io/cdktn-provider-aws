# `sesv2MultiRegionEndpoint` Submodule <a name="`sesv2MultiRegionEndpoint` Submodule" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Sesv2MultiRegionEndpoint <a name="Sesv2MultiRegionEndpoint" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/sesv2_multi_region_endpoint aws_sesv2_multi_region_endpoint}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.Initializer"></a>

```typescript
import { sesv2MultiRegionEndpoint } from '@cdktn/provider-aws'

new sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint(scope: Construct, id: string, config: Sesv2MultiRegionEndpointConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointConfig">Sesv2MultiRegionEndpointConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointConfig">Sesv2MultiRegionEndpointConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.putDetails">putDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.resetDetails">resetDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putDetails` <a name="putDetails" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.putDetails"></a>

```typescript
public putDetails(value: IResolvable | Sesv2MultiRegionEndpointDetails[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.putDetails.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetails">Sesv2MultiRegionEndpointDetails</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.putTimeouts"></a>

```typescript
public putTimeouts(value: Sesv2MultiRegionEndpointTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointTimeouts">Sesv2MultiRegionEndpointTimeouts</a>

---

##### `resetDetails` <a name="resetDetails" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.resetDetails"></a>

```typescript
public resetDetails(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.resetRegion"></a>

```typescript
public resetRegion(): void
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a Sesv2MultiRegionEndpoint resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.isConstruct"></a>

```typescript
import { sesv2MultiRegionEndpoint } from '@cdktn/provider-aws'

sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.isTerraformElement"></a>

```typescript
import { sesv2MultiRegionEndpoint } from '@cdktn/provider-aws'

sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.isTerraformResource"></a>

```typescript
import { sesv2MultiRegionEndpoint } from '@cdktn/provider-aws'

sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.generateConfigForImport"></a>

```typescript
import { sesv2MultiRegionEndpoint } from '@cdktn/provider-aws'

sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a Sesv2MultiRegionEndpoint resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the Sesv2MultiRegionEndpoint to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing Sesv2MultiRegionEndpoint that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/sesv2_multi_region_endpoint#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the Sesv2MultiRegionEndpoint to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.property.details">details</a></code> | <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsList">Sesv2MultiRegionEndpointDetailsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.property.endpointId">endpointId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.property.routes">routes</a></code> | <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutesList">Sesv2MultiRegionEndpointRoutesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.property.tagsAll">tagsAll</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointTimeoutsOutputReference">Sesv2MultiRegionEndpointTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.property.detailsInput">detailsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetails">Sesv2MultiRegionEndpointDetails</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.property.endpointNameInput">endpointNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointTimeouts">Sesv2MultiRegionEndpointTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.property.endpointName">endpointName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `details`<sup>Required</sup> <a name="details" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.property.details"></a>

```typescript
public readonly details: Sesv2MultiRegionEndpointDetailsList;
```

- *Type:* <a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsList">Sesv2MultiRegionEndpointDetailsList</a>

---

##### `endpointId`<sup>Required</sup> <a name="endpointId" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.property.endpointId"></a>

```typescript
public readonly endpointId: string;
```

- *Type:* string

---

##### `routes`<sup>Required</sup> <a name="routes" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.property.routes"></a>

```typescript
public readonly routes: Sesv2MultiRegionEndpointRoutesList;
```

- *Type:* <a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutesList">Sesv2MultiRegionEndpointRoutesList</a>

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.property.tagsAll"></a>

```typescript
public readonly tagsAll: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.property.timeouts"></a>

```typescript
public readonly timeouts: Sesv2MultiRegionEndpointTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointTimeoutsOutputReference">Sesv2MultiRegionEndpointTimeoutsOutputReference</a>

---

##### `detailsInput`<sup>Optional</sup> <a name="detailsInput" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.property.detailsInput"></a>

```typescript
public readonly detailsInput: IResolvable | Sesv2MultiRegionEndpointDetails[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetails">Sesv2MultiRegionEndpointDetails</a>[]

---

##### `endpointNameInput`<sup>Optional</sup> <a name="endpointNameInput" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.property.endpointNameInput"></a>

```typescript
public readonly endpointNameInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | Sesv2MultiRegionEndpointTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointTimeouts">Sesv2MultiRegionEndpointTimeouts</a>

---

##### `endpointName`<sup>Required</sup> <a name="endpointName" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.property.endpointName"></a>

```typescript
public readonly endpointName: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpoint.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### Sesv2MultiRegionEndpointConfig <a name="Sesv2MultiRegionEndpointConfig" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointConfig.Initializer"></a>

```typescript
import { sesv2MultiRegionEndpoint } from '@cdktn/provider-aws'

const sesv2MultiRegionEndpointConfig: sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointConfig.property.endpointName">endpointName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/sesv2_multi_region_endpoint#endpoint_name Sesv2MultiRegionEndpoint#endpoint_name}. |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointConfig.property.details">details</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetails">Sesv2MultiRegionEndpointDetails</a>[]</code> | details block. |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointConfig.property.region">region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/sesv2_multi_region_endpoint#tags Sesv2MultiRegionEndpoint#tags}. |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointTimeouts">Sesv2MultiRegionEndpointTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `endpointName`<sup>Required</sup> <a name="endpointName" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointConfig.property.endpointName"></a>

```typescript
public readonly endpointName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/sesv2_multi_region_endpoint#endpoint_name Sesv2MultiRegionEndpoint#endpoint_name}.

---

##### `details`<sup>Optional</sup> <a name="details" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointConfig.property.details"></a>

```typescript
public readonly details: IResolvable | Sesv2MultiRegionEndpointDetails[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetails">Sesv2MultiRegionEndpointDetails</a>[]

details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/sesv2_multi_region_endpoint#details Sesv2MultiRegionEndpoint#details}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/sesv2_multi_region_endpoint#region Sesv2MultiRegionEndpoint#region}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/sesv2_multi_region_endpoint#tags Sesv2MultiRegionEndpoint#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointConfig.property.timeouts"></a>

```typescript
public readonly timeouts: Sesv2MultiRegionEndpointTimeouts;
```

- *Type:* <a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointTimeouts">Sesv2MultiRegionEndpointTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/sesv2_multi_region_endpoint#timeouts Sesv2MultiRegionEndpoint#timeouts}

---

### Sesv2MultiRegionEndpointDetails <a name="Sesv2MultiRegionEndpointDetails" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetails.Initializer"></a>

```typescript
import { sesv2MultiRegionEndpoint } from '@cdktn/provider-aws'

const sesv2MultiRegionEndpointDetails: sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetails = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetails.property.routesDetails">routesDetails</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetails">Sesv2MultiRegionEndpointDetailsRoutesDetails</a>[]</code> | routes_details block. |

---

##### `routesDetails`<sup>Optional</sup> <a name="routesDetails" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetails.property.routesDetails"></a>

```typescript
public readonly routesDetails: IResolvable | Sesv2MultiRegionEndpointDetailsRoutesDetails[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetails">Sesv2MultiRegionEndpointDetailsRoutesDetails</a>[]

routes_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/sesv2_multi_region_endpoint#routes_details Sesv2MultiRegionEndpoint#routes_details}

---

### Sesv2MultiRegionEndpointDetailsRoutesDetails <a name="Sesv2MultiRegionEndpointDetailsRoutesDetails" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetails.Initializer"></a>

```typescript
import { sesv2MultiRegionEndpoint } from '@cdktn/provider-aws'

const sesv2MultiRegionEndpointDetailsRoutesDetails: sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetails = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetails.property.region">region</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/sesv2_multi_region_endpoint#region Sesv2MultiRegionEndpoint#region}. |

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetails.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/sesv2_multi_region_endpoint#region Sesv2MultiRegionEndpoint#region}.

---

### Sesv2MultiRegionEndpointRoutes <a name="Sesv2MultiRegionEndpointRoutes" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutes.Initializer"></a>

```typescript
import { sesv2MultiRegionEndpoint } from '@cdktn/provider-aws'

const sesv2MultiRegionEndpointRoutes: sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutes = { ... }
```


### Sesv2MultiRegionEndpointTimeouts <a name="Sesv2MultiRegionEndpointTimeouts" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointTimeouts.Initializer"></a>

```typescript
import { sesv2MultiRegionEndpoint } from '@cdktn/provider-aws'

const sesv2MultiRegionEndpointTimeouts: sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointTimeouts.property.create">create</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointTimeouts.property.delete">delete</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/sesv2_multi_region_endpoint#create Sesv2MultiRegionEndpoint#create}

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.63.0/docs/resources/sesv2_multi_region_endpoint#delete Sesv2MultiRegionEndpoint#delete}

---

## Classes <a name="Classes" id="Classes"></a>

### Sesv2MultiRegionEndpointDetailsList <a name="Sesv2MultiRegionEndpointDetailsList" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsList.Initializer"></a>

```typescript
import { sesv2MultiRegionEndpoint } from '@cdktn/provider-aws'

new sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsList.get"></a>

```typescript
public get(index: number): Sesv2MultiRegionEndpointDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetails">Sesv2MultiRegionEndpointDetails</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Sesv2MultiRegionEndpointDetails[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetails">Sesv2MultiRegionEndpointDetails</a>[]

---


### Sesv2MultiRegionEndpointDetailsOutputReference <a name="Sesv2MultiRegionEndpointDetailsOutputReference" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsOutputReference.Initializer"></a>

```typescript
import { sesv2MultiRegionEndpoint } from '@cdktn/provider-aws'

new sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsOutputReference.putRoutesDetails">putRoutesDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsOutputReference.resetRoutesDetails">resetRoutesDetails</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putRoutesDetails` <a name="putRoutesDetails" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsOutputReference.putRoutesDetails"></a>

```typescript
public putRoutesDetails(value: IResolvable | Sesv2MultiRegionEndpointDetailsRoutesDetails[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsOutputReference.putRoutesDetails.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetails">Sesv2MultiRegionEndpointDetailsRoutesDetails</a>[]

---

##### `resetRoutesDetails` <a name="resetRoutesDetails" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsOutputReference.resetRoutesDetails"></a>

```typescript
public resetRoutesDetails(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsOutputReference.property.routesDetails">routesDetails</a></code> | <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsList">Sesv2MultiRegionEndpointDetailsRoutesDetailsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsOutputReference.property.routesDetailsInput">routesDetailsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetails">Sesv2MultiRegionEndpointDetailsRoutesDetails</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetails">Sesv2MultiRegionEndpointDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `routesDetails`<sup>Required</sup> <a name="routesDetails" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsOutputReference.property.routesDetails"></a>

```typescript
public readonly routesDetails: Sesv2MultiRegionEndpointDetailsRoutesDetailsList;
```

- *Type:* <a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsList">Sesv2MultiRegionEndpointDetailsRoutesDetailsList</a>

---

##### `routesDetailsInput`<sup>Optional</sup> <a name="routesDetailsInput" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsOutputReference.property.routesDetailsInput"></a>

```typescript
public readonly routesDetailsInput: IResolvable | Sesv2MultiRegionEndpointDetailsRoutesDetails[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetails">Sesv2MultiRegionEndpointDetailsRoutesDetails</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Sesv2MultiRegionEndpointDetails;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetails">Sesv2MultiRegionEndpointDetails</a>

---


### Sesv2MultiRegionEndpointDetailsRoutesDetailsList <a name="Sesv2MultiRegionEndpointDetailsRoutesDetailsList" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsList.Initializer"></a>

```typescript
import { sesv2MultiRegionEndpoint } from '@cdktn/provider-aws'

new sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsList.get"></a>

```typescript
public get(index: number): Sesv2MultiRegionEndpointDetailsRoutesDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetails">Sesv2MultiRegionEndpointDetailsRoutesDetails</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Sesv2MultiRegionEndpointDetailsRoutesDetails[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetails">Sesv2MultiRegionEndpointDetailsRoutesDetails</a>[]

---


### Sesv2MultiRegionEndpointDetailsRoutesDetailsOutputReference <a name="Sesv2MultiRegionEndpointDetailsRoutesDetailsOutputReference" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsOutputReference.Initializer"></a>

```typescript
import { sesv2MultiRegionEndpoint } from '@cdktn/provider-aws'

new sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsOutputReference.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsOutputReference.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetails">Sesv2MultiRegionEndpointDetailsRoutesDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsOutputReference.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsOutputReference.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetailsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Sesv2MultiRegionEndpointDetailsRoutesDetails;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointDetailsRoutesDetails">Sesv2MultiRegionEndpointDetailsRoutesDetails</a>

---


### Sesv2MultiRegionEndpointRoutesList <a name="Sesv2MultiRegionEndpointRoutesList" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutesList.Initializer"></a>

```typescript
import { sesv2MultiRegionEndpoint } from '@cdktn/provider-aws'

new sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutesList.get"></a>

```typescript
public get(index: number): Sesv2MultiRegionEndpointRoutesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### Sesv2MultiRegionEndpointRoutesOutputReference <a name="Sesv2MultiRegionEndpointRoutesOutputReference" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutesOutputReference.Initializer"></a>

```typescript
import { sesv2MultiRegionEndpoint } from '@cdktn/provider-aws'

new sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutesOutputReference.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutes">Sesv2MultiRegionEndpointRoutes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutesOutputReference.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: Sesv2MultiRegionEndpointRoutes;
```

- *Type:* <a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointRoutes">Sesv2MultiRegionEndpointRoutes</a>

---


### Sesv2MultiRegionEndpointTimeoutsOutputReference <a name="Sesv2MultiRegionEndpointTimeoutsOutputReference" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointTimeoutsOutputReference.Initializer"></a>

```typescript
import { sesv2MultiRegionEndpoint } from '@cdktn/provider-aws'

new sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointTimeouts">Sesv2MultiRegionEndpointTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | Sesv2MultiRegionEndpointTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.sesv2MultiRegionEndpoint.Sesv2MultiRegionEndpointTimeouts">Sesv2MultiRegionEndpointTimeouts</a>

---



