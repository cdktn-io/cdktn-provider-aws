# `s3ControlMultiRegionAccessPointRoutes` Submodule <a name="`s3ControlMultiRegionAccessPointRoutes` Submodule" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### S3ControlMultiRegionAccessPointRoutes <a name="S3ControlMultiRegionAccessPointRoutes" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/s3control_multi_region_access_point_routes aws_s3control_multi_region_access_point_routes}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.Initializer"></a>

```typescript
import { s3ControlMultiRegionAccessPointRoutes } from '@cdktn/provider-aws'

new s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes(scope: Construct, id: string, config: S3ControlMultiRegionAccessPointRoutesConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutesConfig">S3ControlMultiRegionAccessPointRoutesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutesConfig">S3ControlMultiRegionAccessPointRoutesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.putRoute">putRoute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.resetAccountId">resetAccountId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.resetRoute">resetRoute</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putRoute` <a name="putRoute" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.putRoute"></a>

```typescript
public putRoute(value: IResolvable | S3ControlMultiRegionAccessPointRoutesRoute[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.putRoute.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutesRoute">S3ControlMultiRegionAccessPointRoutesRoute</a>[]

---

##### `resetAccountId` <a name="resetAccountId" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.resetAccountId"></a>

```typescript
public resetAccountId(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.resetRegion"></a>

```typescript
public resetRegion(): void
```

##### `resetRoute` <a name="resetRoute" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.resetRoute"></a>

```typescript
public resetRoute(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a S3ControlMultiRegionAccessPointRoutes resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.isConstruct"></a>

```typescript
import { s3ControlMultiRegionAccessPointRoutes } from '@cdktn/provider-aws'

s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.isTerraformElement"></a>

```typescript
import { s3ControlMultiRegionAccessPointRoutes } from '@cdktn/provider-aws'

s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.isTerraformResource"></a>

```typescript
import { s3ControlMultiRegionAccessPointRoutes } from '@cdktn/provider-aws'

s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.generateConfigForImport"></a>

```typescript
import { s3ControlMultiRegionAccessPointRoutes } from '@cdktn/provider-aws'

s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a S3ControlMultiRegionAccessPointRoutes resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the S3ControlMultiRegionAccessPointRoutes to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing S3ControlMultiRegionAccessPointRoutes that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/s3control_multi_region_access_point_routes#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the S3ControlMultiRegionAccessPointRoutes to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.property.route">route</a></code> | <code><a href="#@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutesRouteList">S3ControlMultiRegionAccessPointRoutesRouteList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.property.accountIdInput">accountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.property.mrapInput">mrapInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.property.routeInput">routeInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutesRoute">S3ControlMultiRegionAccessPointRoutesRoute</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.property.accountId">accountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.property.mrap">mrap</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.property.region">region</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `route`<sup>Required</sup> <a name="route" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.property.route"></a>

```typescript
public readonly route: S3ControlMultiRegionAccessPointRoutesRouteList;
```

- *Type:* <a href="#@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutesRouteList">S3ControlMultiRegionAccessPointRoutesRouteList</a>

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.property.accountIdInput"></a>

```typescript
public readonly accountIdInput: string;
```

- *Type:* string

---

##### `mrapInput`<sup>Optional</sup> <a name="mrapInput" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.property.mrapInput"></a>

```typescript
public readonly mrapInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `routeInput`<sup>Optional</sup> <a name="routeInput" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.property.routeInput"></a>

```typescript
public readonly routeInput: IResolvable | S3ControlMultiRegionAccessPointRoutesRoute[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutesRoute">S3ControlMultiRegionAccessPointRoutesRoute</a>[]

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

---

##### `mrap`<sup>Required</sup> <a name="mrap" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.property.mrap"></a>

```typescript
public readonly mrap: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutes.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### S3ControlMultiRegionAccessPointRoutesConfig <a name="S3ControlMultiRegionAccessPointRoutesConfig" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutesConfig.Initializer"></a>

```typescript
import { s3ControlMultiRegionAccessPointRoutes } from '@cdktn/provider-aws'

const s3ControlMultiRegionAccessPointRoutesConfig: s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutesConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutesConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutesConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutesConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutesConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutesConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutesConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutesConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutesConfig.property.mrap">mrap</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/s3control_multi_region_access_point_routes#mrap S3ControlMultiRegionAccessPointRoutes#mrap}. |
| <code><a href="#@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutesConfig.property.accountId">accountId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/s3control_multi_region_access_point_routes#account_id S3ControlMultiRegionAccessPointRoutes#account_id}. |
| <code><a href="#@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutesConfig.property.region">region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutesConfig.property.route">route</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutesRoute">S3ControlMultiRegionAccessPointRoutesRoute</a>[]</code> | route block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutesConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutesConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutesConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutesConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutesConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutesConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutesConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `mrap`<sup>Required</sup> <a name="mrap" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutesConfig.property.mrap"></a>

```typescript
public readonly mrap: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/s3control_multi_region_access_point_routes#mrap S3ControlMultiRegionAccessPointRoutes#mrap}.

---

##### `accountId`<sup>Optional</sup> <a name="accountId" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutesConfig.property.accountId"></a>

```typescript
public readonly accountId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/s3control_multi_region_access_point_routes#account_id S3ControlMultiRegionAccessPointRoutes#account_id}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutesConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/s3control_multi_region_access_point_routes#region S3ControlMultiRegionAccessPointRoutes#region}

---

##### `route`<sup>Optional</sup> <a name="route" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutesConfig.property.route"></a>

```typescript
public readonly route: IResolvable | S3ControlMultiRegionAccessPointRoutesRoute[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutesRoute">S3ControlMultiRegionAccessPointRoutesRoute</a>[]

route block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/s3control_multi_region_access_point_routes#route S3ControlMultiRegionAccessPointRoutes#route}

---

### S3ControlMultiRegionAccessPointRoutesRoute <a name="S3ControlMultiRegionAccessPointRoutesRoute" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutesRoute"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutesRoute.Initializer"></a>

```typescript
import { s3ControlMultiRegionAccessPointRoutes } from '@cdktn/provider-aws'

const s3ControlMultiRegionAccessPointRoutesRoute: s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutesRoute = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutesRoute.property.bucket">bucket</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/s3control_multi_region_access_point_routes#bucket S3ControlMultiRegionAccessPointRoutes#bucket}. |
| <code><a href="#@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutesRoute.property.region">region</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/s3control_multi_region_access_point_routes#region S3ControlMultiRegionAccessPointRoutes#region}. |
| <code><a href="#@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutesRoute.property.trafficDialPercentage">trafficDialPercentage</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/s3control_multi_region_access_point_routes#traffic_dial_percentage S3ControlMultiRegionAccessPointRoutes#traffic_dial_percentage}. |

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutesRoute.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/s3control_multi_region_access_point_routes#bucket S3ControlMultiRegionAccessPointRoutes#bucket}.

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutesRoute.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/s3control_multi_region_access_point_routes#region S3ControlMultiRegionAccessPointRoutes#region}.

---

##### `trafficDialPercentage`<sup>Required</sup> <a name="trafficDialPercentage" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutesRoute.property.trafficDialPercentage"></a>

```typescript
public readonly trafficDialPercentage: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.53.0/docs/resources/s3control_multi_region_access_point_routes#traffic_dial_percentage S3ControlMultiRegionAccessPointRoutes#traffic_dial_percentage}.

---

## Classes <a name="Classes" id="Classes"></a>

### S3ControlMultiRegionAccessPointRoutesRouteList <a name="S3ControlMultiRegionAccessPointRoutesRouteList" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutesRouteList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutesRouteList.Initializer"></a>

```typescript
import { s3ControlMultiRegionAccessPointRoutes } from '@cdktn/provider-aws'

new s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutesRouteList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutesRouteList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutesRouteList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutesRouteList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutesRouteList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutesRouteList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutesRouteList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutesRouteList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutesRouteList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutesRouteList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutesRouteList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutesRouteList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutesRouteList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutesRouteList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutesRouteList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutesRouteList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutesRouteList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutesRouteList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutesRouteList.get"></a>

```typescript
public get(index: number): S3ControlMultiRegionAccessPointRoutesRouteOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutesRouteList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutesRouteList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutesRouteList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutesRouteList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutesRoute">S3ControlMultiRegionAccessPointRoutesRoute</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutesRouteList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutesRouteList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutesRouteList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | S3ControlMultiRegionAccessPointRoutesRoute[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutesRoute">S3ControlMultiRegionAccessPointRoutesRoute</a>[]

---


### S3ControlMultiRegionAccessPointRoutesRouteOutputReference <a name="S3ControlMultiRegionAccessPointRoutesRouteOutputReference" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutesRouteOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutesRouteOutputReference.Initializer"></a>

```typescript
import { s3ControlMultiRegionAccessPointRoutes } from '@cdktn/provider-aws'

new s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutesRouteOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutesRouteOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutesRouteOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutesRouteOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutesRouteOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutesRouteOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutesRouteOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutesRouteOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutesRouteOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutesRouteOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutesRouteOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutesRouteOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutesRouteOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutesRouteOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutesRouteOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutesRouteOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutesRouteOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutesRouteOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutesRouteOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutesRouteOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutesRouteOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutesRouteOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutesRouteOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutesRouteOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutesRouteOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutesRouteOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutesRouteOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutesRouteOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutesRouteOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutesRouteOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutesRouteOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutesRouteOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutesRouteOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutesRouteOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutesRouteOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutesRouteOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutesRouteOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutesRouteOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutesRouteOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutesRouteOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutesRouteOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutesRouteOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutesRouteOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutesRouteOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutesRouteOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutesRouteOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutesRouteOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutesRouteOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutesRouteOutputReference.property.bucketInput">bucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutesRouteOutputReference.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutesRouteOutputReference.property.trafficDialPercentageInput">trafficDialPercentageInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutesRouteOutputReference.property.bucket">bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutesRouteOutputReference.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutesRouteOutputReference.property.trafficDialPercentage">trafficDialPercentage</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutesRouteOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutesRoute">S3ControlMultiRegionAccessPointRoutesRoute</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutesRouteOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutesRouteOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `bucketInput`<sup>Optional</sup> <a name="bucketInput" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutesRouteOutputReference.property.bucketInput"></a>

```typescript
public readonly bucketInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutesRouteOutputReference.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `trafficDialPercentageInput`<sup>Optional</sup> <a name="trafficDialPercentageInput" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutesRouteOutputReference.property.trafficDialPercentageInput"></a>

```typescript
public readonly trafficDialPercentageInput: number;
```

- *Type:* number

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutesRouteOutputReference.property.bucket"></a>

```typescript
public readonly bucket: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutesRouteOutputReference.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `trafficDialPercentage`<sup>Required</sup> <a name="trafficDialPercentage" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutesRouteOutputReference.property.trafficDialPercentage"></a>

```typescript
public readonly trafficDialPercentage: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutesRouteOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | S3ControlMultiRegionAccessPointRoutesRoute;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.s3ControlMultiRegionAccessPointRoutes.S3ControlMultiRegionAccessPointRoutesRoute">S3ControlMultiRegionAccessPointRoutesRoute</a>

---



