# `cloudwatchOtelEnrichment` Submodule <a name="`cloudwatchOtelEnrichment` Submodule" id="@cdktn/provider-aws.cloudwatchOtelEnrichment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudwatchOtelEnrichment <a name="CloudwatchOtelEnrichment" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/cloudwatch_otel_enrichment aws_cloudwatch_otel_enrichment}.

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.Initializer"></a>

```typescript
import { cloudwatchOtelEnrichment } from '@cdktn/provider-aws'

new cloudwatchOtelEnrichment.CloudwatchOtelEnrichment(scope: Construct, id: string, config?: CloudwatchOtelEnrichmentConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentConfig">CloudwatchOtelEnrichmentConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentConfig">CloudwatchOtelEnrichmentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.putExcludeFilter">putExcludeFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.putIncludeFilter">putIncludeFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.resetExcludeFilter">resetExcludeFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.resetIncludeFilter">resetIncludeFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putExcludeFilter` <a name="putExcludeFilter" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.putExcludeFilter"></a>

```typescript
public putExcludeFilter(value: IResolvable | CloudwatchOtelEnrichmentExcludeFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.putExcludeFilter.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFilter">CloudwatchOtelEnrichmentExcludeFilter</a>[]

---

##### `putIncludeFilter` <a name="putIncludeFilter" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.putIncludeFilter"></a>

```typescript
public putIncludeFilter(value: IResolvable | CloudwatchOtelEnrichmentIncludeFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.putIncludeFilter.parameter.value"></a>

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFilter">CloudwatchOtelEnrichmentIncludeFilter</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.putTimeouts"></a>

```typescript
public putTimeouts(value: CloudwatchOtelEnrichmentTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentTimeouts">CloudwatchOtelEnrichmentTimeouts</a>

---

##### `resetExcludeFilter` <a name="resetExcludeFilter" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.resetExcludeFilter"></a>

```typescript
public resetExcludeFilter(): void
```

##### `resetIncludeFilter` <a name="resetIncludeFilter" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.resetIncludeFilter"></a>

```typescript
public resetIncludeFilter(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.resetRegion"></a>

```typescript
public resetRegion(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a CloudwatchOtelEnrichment resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.isConstruct"></a>

```typescript
import { cloudwatchOtelEnrichment } from '@cdktn/provider-aws'

cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.isTerraformElement"></a>

```typescript
import { cloudwatchOtelEnrichment } from '@cdktn/provider-aws'

cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.isTerraformResource"></a>

```typescript
import { cloudwatchOtelEnrichment } from '@cdktn/provider-aws'

cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.generateConfigForImport"></a>

```typescript
import { cloudwatchOtelEnrichment } from '@cdktn/provider-aws'

cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a CloudwatchOtelEnrichment resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the CloudwatchOtelEnrichment to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing CloudwatchOtelEnrichment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/cloudwatch_otel_enrichment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the CloudwatchOtelEnrichment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.property.excludeFilter">excludeFilter</a></code> | <code><a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFilterList">CloudwatchOtelEnrichmentExcludeFilterList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.property.includeFilter">includeFilter</a></code> | <code><a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFilterList">CloudwatchOtelEnrichmentIncludeFilterList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentTimeoutsOutputReference">CloudwatchOtelEnrichmentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.property.excludeFilterInput">excludeFilterInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFilter">CloudwatchOtelEnrichmentExcludeFilter</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.property.includeFilterInput">includeFilterInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFilter">CloudwatchOtelEnrichmentIncludeFilter</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentTimeouts">CloudwatchOtelEnrichmentTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.property.region">region</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `excludeFilter`<sup>Required</sup> <a name="excludeFilter" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.property.excludeFilter"></a>

```typescript
public readonly excludeFilter: CloudwatchOtelEnrichmentExcludeFilterList;
```

- *Type:* <a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFilterList">CloudwatchOtelEnrichmentExcludeFilterList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `includeFilter`<sup>Required</sup> <a name="includeFilter" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.property.includeFilter"></a>

```typescript
public readonly includeFilter: CloudwatchOtelEnrichmentIncludeFilterList;
```

- *Type:* <a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFilterList">CloudwatchOtelEnrichmentIncludeFilterList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.property.timeouts"></a>

```typescript
public readonly timeouts: CloudwatchOtelEnrichmentTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentTimeoutsOutputReference">CloudwatchOtelEnrichmentTimeoutsOutputReference</a>

---

##### `excludeFilterInput`<sup>Optional</sup> <a name="excludeFilterInput" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.property.excludeFilterInput"></a>

```typescript
public readonly excludeFilterInput: IResolvable | CloudwatchOtelEnrichmentExcludeFilter[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFilter">CloudwatchOtelEnrichmentExcludeFilter</a>[]

---

##### `includeFilterInput`<sup>Optional</sup> <a name="includeFilterInput" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.property.includeFilterInput"></a>

```typescript
public readonly includeFilterInput: IResolvable | CloudwatchOtelEnrichmentIncludeFilter[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFilter">CloudwatchOtelEnrichmentIncludeFilter</a>[]

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | CloudwatchOtelEnrichmentTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentTimeouts">CloudwatchOtelEnrichmentTimeouts</a>

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichment.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### CloudwatchOtelEnrichmentConfig <a name="CloudwatchOtelEnrichmentConfig" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentConfig.Initializer"></a>

```typescript
import { cloudwatchOtelEnrichment } from '@cdktn/provider-aws'

const cloudwatchOtelEnrichmentConfig: cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentConfig.property.excludeFilter">excludeFilter</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFilter">CloudwatchOtelEnrichmentExcludeFilter</a>[]</code> | exclude_filter block. |
| <code><a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentConfig.property.includeFilter">includeFilter</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFilter">CloudwatchOtelEnrichmentIncludeFilter</a>[]</code> | include_filter block. |
| <code><a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentConfig.property.region">region</a></code> | <code>string</code> | Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference). |
| <code><a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentTimeouts">CloudwatchOtelEnrichmentTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `excludeFilter`<sup>Optional</sup> <a name="excludeFilter" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentConfig.property.excludeFilter"></a>

```typescript
public readonly excludeFilter: IResolvable | CloudwatchOtelEnrichmentExcludeFilter[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFilter">CloudwatchOtelEnrichmentExcludeFilter</a>[]

exclude_filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/cloudwatch_otel_enrichment#exclude_filter CloudwatchOtelEnrichment#exclude_filter}

---

##### `includeFilter`<sup>Optional</sup> <a name="includeFilter" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentConfig.property.includeFilter"></a>

```typescript
public readonly includeFilter: IResolvable | CloudwatchOtelEnrichmentIncludeFilter[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFilter">CloudwatchOtelEnrichmentIncludeFilter</a>[]

include_filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/cloudwatch_otel_enrichment#include_filter CloudwatchOtelEnrichment#include_filter}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Region where this resource will be [managed](https://docs.aws.amazon.com/general/latest/gr/rande.html#regional-endpoints). Defaults to the Region set in the [provider configuration](https://registry.terraform.io/providers/hashicorp/aws/latest/docs#aws-configuration-reference).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/cloudwatch_otel_enrichment#region CloudwatchOtelEnrichment#region}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentConfig.property.timeouts"></a>

```typescript
public readonly timeouts: CloudwatchOtelEnrichmentTimeouts;
```

- *Type:* <a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentTimeouts">CloudwatchOtelEnrichmentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/cloudwatch_otel_enrichment#timeouts CloudwatchOtelEnrichment#timeouts}

---

### CloudwatchOtelEnrichmentExcludeFilter <a name="CloudwatchOtelEnrichmentExcludeFilter" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFilter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFilter.Initializer"></a>

```typescript
import { cloudwatchOtelEnrichment } from '@cdktn/provider-aws'

const cloudwatchOtelEnrichmentExcludeFilter: cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFilter.property.namespace">namespace</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/cloudwatch_otel_enrichment#namespace CloudwatchOtelEnrichment#namespace}. |
| <code><a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFilter.property.metricNames">metricNames</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/cloudwatch_otel_enrichment#metric_names CloudwatchOtelEnrichment#metric_names}. |

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFilter.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/cloudwatch_otel_enrichment#namespace CloudwatchOtelEnrichment#namespace}.

---

##### `metricNames`<sup>Optional</sup> <a name="metricNames" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFilter.property.metricNames"></a>

```typescript
public readonly metricNames: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/cloudwatch_otel_enrichment#metric_names CloudwatchOtelEnrichment#metric_names}.

---

### CloudwatchOtelEnrichmentIncludeFilter <a name="CloudwatchOtelEnrichmentIncludeFilter" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFilter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFilter.Initializer"></a>

```typescript
import { cloudwatchOtelEnrichment } from '@cdktn/provider-aws'

const cloudwatchOtelEnrichmentIncludeFilter: cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFilter.property.namespace">namespace</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/cloudwatch_otel_enrichment#namespace CloudwatchOtelEnrichment#namespace}. |
| <code><a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFilter.property.metricNames">metricNames</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/cloudwatch_otel_enrichment#metric_names CloudwatchOtelEnrichment#metric_names}. |

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFilter.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/cloudwatch_otel_enrichment#namespace CloudwatchOtelEnrichment#namespace}.

---

##### `metricNames`<sup>Optional</sup> <a name="metricNames" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFilter.property.metricNames"></a>

```typescript
public readonly metricNames: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/cloudwatch_otel_enrichment#metric_names CloudwatchOtelEnrichment#metric_names}.

---

### CloudwatchOtelEnrichmentTimeouts <a name="CloudwatchOtelEnrichmentTimeouts" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentTimeouts.Initializer"></a>

```typescript
import { cloudwatchOtelEnrichment } from '@cdktn/provider-aws'

const cloudwatchOtelEnrichmentTimeouts: cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentTimeouts.property.create">create</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |
| <code><a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentTimeouts.property.delete">delete</a></code> | <code>string</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/cloudwatch_otel_enrichment#create CloudwatchOtelEnrichment#create}

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/6.70.0/docs/resources/cloudwatch_otel_enrichment#delete CloudwatchOtelEnrichment#delete}

---

## Classes <a name="Classes" id="Classes"></a>

### CloudwatchOtelEnrichmentExcludeFilterList <a name="CloudwatchOtelEnrichmentExcludeFilterList" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFilterList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFilterList.Initializer"></a>

```typescript
import { cloudwatchOtelEnrichment } from '@cdktn/provider-aws'

new cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFilterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFilterList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFilterList.get"></a>

```typescript
public get(index: number): CloudwatchOtelEnrichmentExcludeFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFilterList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFilter">CloudwatchOtelEnrichmentExcludeFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CloudwatchOtelEnrichmentExcludeFilter[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFilter">CloudwatchOtelEnrichmentExcludeFilter</a>[]

---


### CloudwatchOtelEnrichmentExcludeFilterOutputReference <a name="CloudwatchOtelEnrichmentExcludeFilterOutputReference" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFilterOutputReference.Initializer"></a>

```typescript
import { cloudwatchOtelEnrichment } from '@cdktn/provider-aws'

new cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFilterOutputReference.resetMetricNames">resetMetricNames</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMetricNames` <a name="resetMetricNames" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFilterOutputReference.resetMetricNames"></a>

```typescript
public resetMetricNames(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFilterOutputReference.property.metricNamesInput">metricNamesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFilterOutputReference.property.namespaceInput">namespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFilterOutputReference.property.metricNames">metricNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFilterOutputReference.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFilter">CloudwatchOtelEnrichmentExcludeFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `metricNamesInput`<sup>Optional</sup> <a name="metricNamesInput" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFilterOutputReference.property.metricNamesInput"></a>

```typescript
public readonly metricNamesInput: string[];
```

- *Type:* string[]

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFilterOutputReference.property.namespaceInput"></a>

```typescript
public readonly namespaceInput: string;
```

- *Type:* string

---

##### `metricNames`<sup>Required</sup> <a name="metricNames" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFilterOutputReference.property.metricNames"></a>

```typescript
public readonly metricNames: string[];
```

- *Type:* string[]

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFilterOutputReference.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CloudwatchOtelEnrichmentExcludeFilter;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentExcludeFilter">CloudwatchOtelEnrichmentExcludeFilter</a>

---


### CloudwatchOtelEnrichmentIncludeFilterList <a name="CloudwatchOtelEnrichmentIncludeFilterList" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFilterList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFilterList.Initializer"></a>

```typescript
import { cloudwatchOtelEnrichment } from '@cdktn/provider-aws'

new cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFilterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFilterList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFilterList.get"></a>

```typescript
public get(index: number): CloudwatchOtelEnrichmentIncludeFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFilterList.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFilter">CloudwatchOtelEnrichmentIncludeFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CloudwatchOtelEnrichmentIncludeFilter[];
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFilter">CloudwatchOtelEnrichmentIncludeFilter</a>[]

---


### CloudwatchOtelEnrichmentIncludeFilterOutputReference <a name="CloudwatchOtelEnrichmentIncludeFilterOutputReference" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFilterOutputReference.Initializer"></a>

```typescript
import { cloudwatchOtelEnrichment } from '@cdktn/provider-aws'

new cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFilterOutputReference.resetMetricNames">resetMetricNames</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMetricNames` <a name="resetMetricNames" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFilterOutputReference.resetMetricNames"></a>

```typescript
public resetMetricNames(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFilterOutputReference.property.metricNamesInput">metricNamesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFilterOutputReference.property.namespaceInput">namespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFilterOutputReference.property.metricNames">metricNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFilterOutputReference.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFilter">CloudwatchOtelEnrichmentIncludeFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `metricNamesInput`<sup>Optional</sup> <a name="metricNamesInput" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFilterOutputReference.property.metricNamesInput"></a>

```typescript
public readonly metricNamesInput: string[];
```

- *Type:* string[]

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFilterOutputReference.property.namespaceInput"></a>

```typescript
public readonly namespaceInput: string;
```

- *Type:* string

---

##### `metricNames`<sup>Required</sup> <a name="metricNames" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFilterOutputReference.property.metricNames"></a>

```typescript
public readonly metricNames: string[];
```

- *Type:* string[]

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFilterOutputReference.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CloudwatchOtelEnrichmentIncludeFilter;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentIncludeFilter">CloudwatchOtelEnrichmentIncludeFilter</a>

---


### CloudwatchOtelEnrichmentTimeoutsOutputReference <a name="CloudwatchOtelEnrichmentTimeoutsOutputReference" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentTimeoutsOutputReference.Initializer"></a>

```typescript
import { cloudwatchOtelEnrichment } from '@cdktn/provider-aws'

new cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentTimeouts">CloudwatchOtelEnrichmentTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | CloudwatchOtelEnrichmentTimeouts;
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-aws.cloudwatchOtelEnrichment.CloudwatchOtelEnrichmentTimeouts">CloudwatchOtelEnrichmentTimeouts</a>

---



