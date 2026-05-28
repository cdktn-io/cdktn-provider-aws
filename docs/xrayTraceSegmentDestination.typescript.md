# `xrayTraceSegmentDestination` Submodule <a name="`xrayTraceSegmentDestination` Submodule" id="@cdktn/provider-aws.xrayTraceSegmentDestination"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### XrayTraceSegmentDestination <a name="XrayTraceSegmentDestination" id="@cdktn/provider-aws.xrayTraceSegmentDestination.XrayTraceSegmentDestination"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.47.0/docs/resources/xray_trace_segment_destination aws_xray_trace_segment_destination}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.xrayTraceSegmentDestination.XrayTraceSegmentDestination.Initializer"></a>

```typescript
import { xrayTraceSegmentDestination } from '@cdktn/provider-aws'

new xrayTraceSegmentDestination.XrayTraceSegmentDestination(scope: Construct, id: string, config: XrayTraceSegmentDestinationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.xrayTraceSegmentDestination.XrayTraceSegmentDestination.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.xrayTraceSegmentDestination.XrayTraceSegmentDestination.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.xrayTraceSegmentDestination.XrayTraceSegmentDestination.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-aws.xrayTraceSegmentDestination.XrayTraceSegmentDestinationConfig">XrayTraceSegmentDestinationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.xrayTraceSegmentDestination.XrayTraceSegmentDestination.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.xrayTraceSegmentDestination.XrayTraceSegmentDestination.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-aws.xrayTraceSegmentDestination.XrayTraceSegmentDestination.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.xrayTraceSegmentDestination.XrayTraceSegmentDestinationConfig">XrayTraceSegmentDestinationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.xrayTraceSegmentDestination.XrayTraceSegmentDestination.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.xrayTraceSegmentDestination.XrayTraceSegmentDestination.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.xrayTraceSegmentDestination.XrayTraceSegmentDestination.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.xrayTraceSegmentDestination.XrayTraceSegmentDestination.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.xrayTraceSegmentDestination.XrayTraceSegmentDestination.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.xrayTraceSegmentDestination.XrayTraceSegmentDestination.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.xrayTraceSegmentDestination.XrayTraceSegmentDestination.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.xrayTraceSegmentDestination.XrayTraceSegmentDestination.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.xrayTraceSegmentDestination.XrayTraceSegmentDestination.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.xrayTraceSegmentDestination.XrayTraceSegmentDestination.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.xrayTraceSegmentDestination.XrayTraceSegmentDestination.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.xrayTraceSegmentDestination.XrayTraceSegmentDestination.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.xrayTraceSegmentDestination.XrayTraceSegmentDestination.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.xrayTraceSegmentDestination.XrayTraceSegmentDestination.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.xrayTraceSegmentDestination.XrayTraceSegmentDestination.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.xrayTraceSegmentDestination.XrayTraceSegmentDestination.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.xrayTraceSegmentDestination.XrayTraceSegmentDestination.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.xrayTraceSegmentDestination.XrayTraceSegmentDestination.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.xrayTraceSegmentDestination.XrayTraceSegmentDestination.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.xrayTraceSegmentDestination.XrayTraceSegmentDestination.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.xrayTraceSegmentDestination.XrayTraceSegmentDestination.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.xrayTraceSegmentDestination.XrayTraceSegmentDestination.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.xrayTraceSegmentDestination.XrayTraceSegmentDestination.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.xrayTraceSegmentDestination.XrayTraceSegmentDestination.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.xrayTraceSegmentDestination.XrayTraceSegmentDestination.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.xrayTraceSegmentDestination.XrayTraceSegmentDestination.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.xrayTraceSegmentDestination.XrayTraceSegmentDestination.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.xrayTraceSegmentDestination.XrayTraceSegmentDestination.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-aws.xrayTraceSegmentDestination.XrayTraceSegmentDestination.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.xrayTraceSegmentDestination.XrayTraceSegmentDestination.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-aws.xrayTraceSegmentDestination.XrayTraceSegmentDestination.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.xrayTraceSegmentDestination.XrayTraceSegmentDestination.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.xrayTraceSegmentDestination.XrayTraceSegmentDestination.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-aws.xrayTraceSegmentDestination.XrayTraceSegmentDestination.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.xrayTraceSegmentDestination.XrayTraceSegmentDestination.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-aws.xrayTraceSegmentDestination.XrayTraceSegmentDestination.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-aws.xrayTraceSegmentDestination.XrayTraceSegmentDestination.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-aws.xrayTraceSegmentDestination.XrayTraceSegmentDestination.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-aws.xrayTraceSegmentDestination.XrayTraceSegmentDestination.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-aws.xrayTraceSegmentDestination.XrayTraceSegmentDestination.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.xrayTraceSegmentDestination.XrayTraceSegmentDestination.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.xrayTraceSegmentDestination.XrayTraceSegmentDestination.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.xrayTraceSegmentDestination.XrayTraceSegmentDestination.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.xrayTraceSegmentDestination.XrayTraceSegmentDestination.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.xrayTraceSegmentDestination.XrayTraceSegmentDestination.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.xrayTraceSegmentDestination.XrayTraceSegmentDestination.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.xrayTraceSegmentDestination.XrayTraceSegmentDestination.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.xrayTraceSegmentDestination.XrayTraceSegmentDestination.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.xrayTraceSegmentDestination.XrayTraceSegmentDestination.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.xrayTraceSegmentDestination.XrayTraceSegmentDestination.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.xrayTraceSegmentDestination.XrayTraceSegmentDestination.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.xrayTraceSegmentDestination.XrayTraceSegmentDestination.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.xrayTraceSegmentDestination.XrayTraceSegmentDestination.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.xrayTraceSegmentDestination.XrayTraceSegmentDestination.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.xrayTraceSegmentDestination.XrayTraceSegmentDestination.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.xrayTraceSegmentDestination.XrayTraceSegmentDestination.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.xrayTraceSegmentDestination.XrayTraceSegmentDestination.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.xrayTraceSegmentDestination.XrayTraceSegmentDestination.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.xrayTraceSegmentDestination.XrayTraceSegmentDestination.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-aws.xrayTraceSegmentDestination.XrayTraceSegmentDestination.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-aws.xrayTraceSegmentDestination.XrayTraceSegmentDestination.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.xrayTraceSegmentDestination.XrayTraceSegmentDestination.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.xrayTraceSegmentDestination.XrayTraceSegmentDestination.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.xrayTraceSegmentDestination.XrayTraceSegmentDestination.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.xrayTraceSegmentDestination.XrayTraceSegmentDestination.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-aws.xrayTraceSegmentDestination.XrayTraceSegmentDestination.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.xrayTraceSegmentDestination.XrayTraceSegmentDestination.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-aws.xrayTraceSegmentDestination.XrayTraceSegmentDestination.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.xrayTraceSegmentDestination.XrayTraceSegmentDestination.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.xrayTraceSegmentDestination.XrayTraceSegmentDestination.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-aws.xrayTraceSegmentDestination.XrayTraceSegmentDestination.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.xrayTraceSegmentDestination.XrayTraceSegmentDestination.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-aws.xrayTraceSegmentDestination.XrayTraceSegmentDestination.putTimeouts"></a>

```typescript
public putTimeouts(value: XrayTraceSegmentDestinationTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.xrayTraceSegmentDestination.XrayTraceSegmentDestination.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.xrayTraceSegmentDestination.XrayTraceSegmentDestinationTimeouts">XrayTraceSegmentDestinationTimeouts</a>

---

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-aws.xrayTraceSegmentDestination.XrayTraceSegmentDestination.resetRegion"></a>

```typescript
public resetRegion(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-aws.xrayTraceSegmentDestination.XrayTraceSegmentDestination.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.xrayTraceSegmentDestination.XrayTraceSegmentDestination.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.xrayTraceSegmentDestination.XrayTraceSegmentDestination.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.xrayTraceSegmentDestination.XrayTraceSegmentDestination.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.xrayTraceSegmentDestination.XrayTraceSegmentDestination.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a XrayTraceSegmentDestination resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-aws.xrayTraceSegmentDestination.XrayTraceSegmentDestination.isConstruct"></a>

```typescript
import { xrayTraceSegmentDestination } from '@cdktn/provider-aws'

xrayTraceSegmentDestination.XrayTraceSegmentDestination.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.xrayTraceSegmentDestination.XrayTraceSegmentDestination.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-aws.xrayTraceSegmentDestination.XrayTraceSegmentDestination.isTerraformElement"></a>

```typescript
import { xrayTraceSegmentDestination } from '@cdktn/provider-aws'

xrayTraceSegmentDestination.XrayTraceSegmentDestination.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.xrayTraceSegmentDestination.XrayTraceSegmentDestination.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-aws.xrayTraceSegmentDestination.XrayTraceSegmentDestination.isTerraformResource"></a>

```typescript
import { xrayTraceSegmentDestination } from '@cdktn/provider-aws'

xrayTraceSegmentDestination.XrayTraceSegmentDestination.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.xrayTraceSegmentDestination.XrayTraceSegmentDestination.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-aws.xrayTraceSegmentDestination.XrayTraceSegmentDestination.generateConfigForImport"></a>

```typescript
import { xrayTraceSegmentDestination } from '@cdktn/provider-aws'

xrayTraceSegmentDestination.XrayTraceSegmentDestination.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a XrayTraceSegmentDestination resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.xrayTraceSegmentDestination.XrayTraceSegmentDestination.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.xrayTraceSegmentDestination.XrayTraceSegmentDestination.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the XrayTraceSegmentDestination to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.xrayTraceSegmentDestination.XrayTraceSegmentDestination.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing XrayTraceSegmentDestination that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.47.0/docs/resources/xray_trace_segment_destination#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.xrayTraceSegmentDestination.XrayTraceSegmentDestination.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the XrayTraceSegmentDestination to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.xrayTraceSegmentDestination.XrayTraceSegmentDestination.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.xrayTraceSegmentDestination.XrayTraceSegmentDestination.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.xrayTraceSegmentDestination.XrayTraceSegmentDestination.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.xrayTraceSegmentDestination.XrayTraceSegmentDestination.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.xrayTraceSegmentDestination.XrayTraceSegmentDestination.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.xrayTraceSegmentDestination.XrayTraceSegmentDestination.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.xrayTraceSegmentDestination.XrayTraceSegmentDestination.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.xrayTraceSegmentDestination.XrayTraceSegmentDestination.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.xrayTraceSegmentDestination.XrayTraceSegmentDestination.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.xrayTraceSegmentDestination.XrayTraceSegmentDestination.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.xrayTraceSegmentDestination.XrayTraceSegmentDestination.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.xrayTraceSegmentDestination.XrayTraceSegmentDestination.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.xrayTraceSegmentDestination.XrayTraceSegmentDestination.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.xrayTraceSegmentDestination.XrayTraceSegmentDestination.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.xrayTraceSegmentDestination.XrayTraceSegmentDestination.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.xrayTraceSegmentDestination.XrayTraceSegmentDestination.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.xrayTraceSegmentDestination.XrayTraceSegmentDestinationTimeoutsOutputReference">XrayTraceSegmentDestinationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.xrayTraceSegmentDestination.XrayTraceSegmentDestination.property.destinationInput">destinationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.xrayTraceSegmentDestination.XrayTraceSegmentDestination.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.xrayTraceSegmentDestination.XrayTraceSegmentDestination.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.xrayTraceSegmentDestination.XrayTraceSegmentDestinationTimeouts">XrayTraceSegmentDestinationTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.xrayTraceSegmentDestination.XrayTraceSegmentDestination.property.destination">destination</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.xrayTraceSegmentDestination.XrayTraceSegmentDestination.property.region">region</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.xrayTraceSegmentDestination.XrayTraceSegmentDestination.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-aws.xrayTraceSegmentDestination.XrayTraceSegmentDestination.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.xrayTraceSegmentDestination.XrayTraceSegmentDestination.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-aws.xrayTraceSegmentDestination.XrayTraceSegmentDestination.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-aws.xrayTraceSegmentDestination.XrayTraceSegmentDestination.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-aws.xrayTraceSegmentDestination.XrayTraceSegmentDestination.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-aws.xrayTraceSegmentDestination.XrayTraceSegmentDestination.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.xrayTraceSegmentDestination.XrayTraceSegmentDestination.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.xrayTraceSegmentDestination.XrayTraceSegmentDestination.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.xrayTraceSegmentDestination.XrayTraceSegmentDestination.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.xrayTraceSegmentDestination.XrayTraceSegmentDestination.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.xrayTraceSegmentDestination.XrayTraceSegmentDestination.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.xrayTraceSegmentDestination.XrayTraceSegmentDestination.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.xrayTraceSegmentDestination.XrayTraceSegmentDestination.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.xrayTraceSegmentDestination.XrayTraceSegmentDestination.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-aws.xrayTraceSegmentDestination.XrayTraceSegmentDestination.property.timeouts"></a>

```typescript
public readonly timeouts: XrayTraceSegmentDestinationTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-aws.xrayTraceSegmentDestination.XrayTraceSegmentDestinationTimeoutsOutputReference">XrayTraceSegmentDestinationTimeoutsOutputReference</a>

---

##### `destinationInput`<sup>Optional</sup> <a name="destinationInput" id="@cdktn/provider-aws.xrayTraceSegmentDestination.XrayTraceSegmentDestination.property.destinationInput"></a>

```typescript
public readonly destinationInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-aws.xrayTraceSegmentDestination.XrayTraceSegmentDestination.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-aws.xrayTraceSegmentDestination.XrayTraceSegmentDestination.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | XrayTraceSegmentDestinationTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.xrayTraceSegmentDestination.XrayTraceSegmentDestinationTimeouts">XrayTraceSegmentDestinationTimeouts</a>

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktn/provider-aws.xrayTraceSegmentDestination.XrayTraceSegmentDestination.property.destination"></a>

```typescript
public readonly destination: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.xrayTraceSegmentDestination.XrayTraceSegmentDestination.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.xrayTraceSegmentDestination.XrayTraceSegmentDestination.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.xrayTraceSegmentDestination.XrayTraceSegmentDestination.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### XrayTraceSegmentDestinationConfig <a name="XrayTraceSegmentDestinationConfig" id="@cdktn/provider-aws.xrayTraceSegmentDestination.XrayTraceSegmentDestinationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.xrayTraceSegmentDestination.XrayTraceSegmentDestinationConfig.Initializer"></a>

```typescript
import { xrayTraceSegmentDestination } from '@cdktn/provider-aws'

const xrayTraceSegmentDestinationConfig: xrayTraceSegmentDestination.XrayTraceSegmentDestinationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.xrayTraceSegmentDestination.XrayTraceSegmentDestinationConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.xrayTraceSegmentDestination.XrayTraceSegmentDestinationConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.xrayTraceSegmentDestination.XrayTraceSegmentDestinationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.xrayTraceSegmentDestination.XrayTraceSegmentDestinationConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.xrayTraceSegmentDestination.XrayTraceSegmentDestinationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.xrayTraceSegmentDestination.XrayTraceSegmentDestinationConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.xrayTraceSegmentDestination.XrayTraceSegmentDestinationConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.xrayTraceSegmentDestination.XrayTraceSegmentDestinationConfig.property.destination">destination</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.47.0/docs/resources/xray_trace_segment_destination#destination XrayTraceSegmentDestination#destination}. |
| <code><a href="#@cdktn/provider-aws.xrayTraceSegmentDestination.XrayTraceSegmentDestinationConfig.property.region">region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.xrayTraceSegmentDestination.XrayTraceSegmentDestinationConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.xrayTraceSegmentDestination.XrayTraceSegmentDestinationTimeouts">XrayTraceSegmentDestinationTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.xrayTraceSegmentDestination.XrayTraceSegmentDestinationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.xrayTraceSegmentDestination.XrayTraceSegmentDestinationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.xrayTraceSegmentDestination.XrayTraceSegmentDestinationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.xrayTraceSegmentDestination.XrayTraceSegmentDestinationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.xrayTraceSegmentDestination.XrayTraceSegmentDestinationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.xrayTraceSegmentDestination.XrayTraceSegmentDestinationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.xrayTraceSegmentDestination.XrayTraceSegmentDestinationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `destination`<sup>Required</sup> <a name="destination" id="@cdktn/provider-aws.xrayTraceSegmentDestination.XrayTraceSegmentDestinationConfig.property.destination"></a>

```typescript
public readonly destination: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.47.0/docs/resources/xray_trace_segment_destination#destination XrayTraceSegmentDestination#destination}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.xrayTraceSegmentDestination.XrayTraceSegmentDestinationConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.47.0/docs/resources/xray_trace_segment_destination#region XrayTraceSegmentDestination#region}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-aws.xrayTraceSegmentDestination.XrayTraceSegmentDestinationConfig.property.timeouts"></a>

```typescript
public readonly timeouts: XrayTraceSegmentDestinationTimeouts;
```

- *Type:* <a href="#@cdktn/provider-aws.xrayTraceSegmentDestination.XrayTraceSegmentDestinationTimeouts">XrayTraceSegmentDestinationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.47.0/docs/resources/xray_trace_segment_destination#timeouts XrayTraceSegmentDestination#timeouts}

---

### XrayTraceSegmentDestinationTimeouts <a name="XrayTraceSegmentDestinationTimeouts" id="@cdktn/provider-aws.xrayTraceSegmentDestination.XrayTraceSegmentDestinationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.xrayTraceSegmentDestination.XrayTraceSegmentDestinationTimeouts.Initializer"></a>

```typescript
import { xrayTraceSegmentDestination } from '@cdktn/provider-aws'

const xrayTraceSegmentDestinationTimeouts: xrayTraceSegmentDestination.XrayTraceSegmentDestinationTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.xrayTraceSegmentDestination.XrayTraceSegmentDestinationTimeouts.property.create">create</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |
| <code><a href="#@cdktn/provider-aws.xrayTraceSegmentDestination.XrayTraceSegmentDestinationTimeouts.property.update">update</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-aws.xrayTraceSegmentDestination.XrayTraceSegmentDestinationTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.47.0/docs/resources/xray_trace_segment_destination#create XrayTraceSegmentDestination#create}

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-aws.xrayTraceSegmentDestination.XrayTraceSegmentDestinationTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.47.0/docs/resources/xray_trace_segment_destination#update XrayTraceSegmentDestination#update}

---

## Classes <a name="Classes" id="Classes"></a>

### XrayTraceSegmentDestinationTimeoutsOutputReference <a name="XrayTraceSegmentDestinationTimeoutsOutputReference" id="@cdktn/provider-aws.xrayTraceSegmentDestination.XrayTraceSegmentDestinationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.xrayTraceSegmentDestination.XrayTraceSegmentDestinationTimeoutsOutputReference.Initializer"></a>

```typescript
import { xrayTraceSegmentDestination } from '@cdktn/provider-aws'

new xrayTraceSegmentDestination.XrayTraceSegmentDestinationTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.xrayTraceSegmentDestination.XrayTraceSegmentDestinationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.xrayTraceSegmentDestination.XrayTraceSegmentDestinationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.xrayTraceSegmentDestination.XrayTraceSegmentDestinationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.xrayTraceSegmentDestination.XrayTraceSegmentDestinationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.xrayTraceSegmentDestination.XrayTraceSegmentDestinationTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.xrayTraceSegmentDestination.XrayTraceSegmentDestinationTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.xrayTraceSegmentDestination.XrayTraceSegmentDestinationTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.xrayTraceSegmentDestination.XrayTraceSegmentDestinationTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.xrayTraceSegmentDestination.XrayTraceSegmentDestinationTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.xrayTraceSegmentDestination.XrayTraceSegmentDestinationTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.xrayTraceSegmentDestination.XrayTraceSegmentDestinationTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.xrayTraceSegmentDestination.XrayTraceSegmentDestinationTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.xrayTraceSegmentDestination.XrayTraceSegmentDestinationTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.xrayTraceSegmentDestination.XrayTraceSegmentDestinationTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.xrayTraceSegmentDestination.XrayTraceSegmentDestinationTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.xrayTraceSegmentDestination.XrayTraceSegmentDestinationTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.xrayTraceSegmentDestination.XrayTraceSegmentDestinationTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.xrayTraceSegmentDestination.XrayTraceSegmentDestinationTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.xrayTraceSegmentDestination.XrayTraceSegmentDestinationTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.xrayTraceSegmentDestination.XrayTraceSegmentDestinationTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.xrayTraceSegmentDestination.XrayTraceSegmentDestinationTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.xrayTraceSegmentDestination.XrayTraceSegmentDestinationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.xrayTraceSegmentDestination.XrayTraceSegmentDestinationTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.xrayTraceSegmentDestination.XrayTraceSegmentDestinationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.xrayTraceSegmentDestination.XrayTraceSegmentDestinationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.xrayTraceSegmentDestination.XrayTraceSegmentDestinationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.xrayTraceSegmentDestination.XrayTraceSegmentDestinationTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.xrayTraceSegmentDestination.XrayTraceSegmentDestinationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.xrayTraceSegmentDestination.XrayTraceSegmentDestinationTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.xrayTraceSegmentDestination.XrayTraceSegmentDestinationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.xrayTraceSegmentDestination.XrayTraceSegmentDestinationTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.xrayTraceSegmentDestination.XrayTraceSegmentDestinationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.xrayTraceSegmentDestination.XrayTraceSegmentDestinationTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.xrayTraceSegmentDestination.XrayTraceSegmentDestinationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.xrayTraceSegmentDestination.XrayTraceSegmentDestinationTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.xrayTraceSegmentDestination.XrayTraceSegmentDestinationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.xrayTraceSegmentDestination.XrayTraceSegmentDestinationTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.xrayTraceSegmentDestination.XrayTraceSegmentDestinationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.xrayTraceSegmentDestination.XrayTraceSegmentDestinationTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.xrayTraceSegmentDestination.XrayTraceSegmentDestinationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.xrayTraceSegmentDestination.XrayTraceSegmentDestinationTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.xrayTraceSegmentDestination.XrayTraceSegmentDestinationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.xrayTraceSegmentDestination.XrayTraceSegmentDestinationTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-aws.xrayTraceSegmentDestination.XrayTraceSegmentDestinationTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-aws.xrayTraceSegmentDestination.XrayTraceSegmentDestinationTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.xrayTraceSegmentDestination.XrayTraceSegmentDestinationTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.xrayTraceSegmentDestination.XrayTraceSegmentDestinationTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.xrayTraceSegmentDestination.XrayTraceSegmentDestinationTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.xrayTraceSegmentDestination.XrayTraceSegmentDestinationTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.xrayTraceSegmentDestination.XrayTraceSegmentDestinationTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.xrayTraceSegmentDestination.XrayTraceSegmentDestinationTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.xrayTraceSegmentDestination.XrayTraceSegmentDestinationTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.xrayTraceSegmentDestination.XrayTraceSegmentDestinationTimeouts">XrayTraceSegmentDestinationTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.xrayTraceSegmentDestination.XrayTraceSegmentDestinationTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.xrayTraceSegmentDestination.XrayTraceSegmentDestinationTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-aws.xrayTraceSegmentDestination.XrayTraceSegmentDestinationTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-aws.xrayTraceSegmentDestination.XrayTraceSegmentDestinationTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-aws.xrayTraceSegmentDestination.XrayTraceSegmentDestinationTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-aws.xrayTraceSegmentDestination.XrayTraceSegmentDestinationTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.xrayTraceSegmentDestination.XrayTraceSegmentDestinationTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | XrayTraceSegmentDestinationTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.xrayTraceSegmentDestination.XrayTraceSegmentDestinationTimeouts">XrayTraceSegmentDestinationTimeouts</a>

---



